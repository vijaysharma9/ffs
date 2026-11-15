/**
 * Blog Content Formatter, Interlinker & Table of Contents Utility
 * Automatically structures raw text into semantic H2/H3/P tags,
 * bolds essential financial terminology, adds internal links,
 * and extracts anchor headings for dynamic Table of Contents.
 */

export interface TableOfContentItem {
  id: string;
  text: string;
  level: number; // 2 for H2, 3 for H3
}

interface KeywordLink {
  phrase: string;
  url: string;
  title?: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "") // strip html tags
    .replace(/[*_#]/g, "") // strip markdown
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Internal link dictionary mapping loan keywords to their specific routes
export const INTERNAL_LINKS: KeywordLink[] = [
  { phrase: "Loan Against Property", url: "/loan-products#loan-against-property", title: "Loan Against Property Details" },
  { phrase: "Debt Consolidation", url: "/loan-products#debt-consolidation", title: "Debt Consolidation Assistance" },
  { phrase: "Overdraft Facility", url: "/loan-products#overdraft-facility", title: "Overdraft Facility Guide" },
  { phrase: "Overdraft", url: "/loan-products#overdraft-facility", title: "Overdraft Facility" },
  { phrase: "Personal Loan", url: "/loan-products#personal-loan", title: "Personal Loan Assistance" },
  { phrase: "Personal Loans", url: "/loan-products#personal-loan", title: "Personal Loans" },
  { phrase: "Business Loan", url: "/loan-products#business-loan", title: "Business Loan Options" },
  { phrase: "Business Loans", url: "/loan-products#business-loan", title: "Business Loans for MSMEs" },
  { phrase: "Home Loan", url: "/loan-products#home-loan", title: "Home Loan Consultation" },
  { phrase: "Home Loans", url: "/loan-products#home-loan", title: "Home Loan Products" },
  { phrase: "Car Loan", url: "/loan-products#car-loan", title: "Car Loan Financing" },
  { phrase: "Car Loans", url: "/loan-products#car-loan", title: "Car Loan Financing" },
  { phrase: "Loan Products", url: "/loan-products", title: "All Loan Products" },
  { phrase: "Loan Enquiry", url: "/#contact", title: "Submit a Loan Enquiry" },
  { phrase: "How It Works", url: "/how-it-works", title: "How It Works Process" },
  { phrase: "Frequently Asked Questions", url: "/faqs", title: "Fast Fincorp FAQs" },
  { phrase: "Fast Fincorp Services", url: "/about", title: "About Fast Fincorp Services" },
];

// Essential financial keywords to automatically bold for emphasis & readability
export const KEYWORDS_TO_BOLD = [
  "CIBIL score",
  "CIBIL",
  "credit score",
  "Days Past Due (DPD)",
  "Credit Utilization Ratio (CUR)",
  "No Due Certificate (NDC)",
  "interest rate",
  "interest rates",
  "monthly EMI",
  "EMI",
  "tenure",
  "collateral",
  "unsecured loan",
  "unsecured loans",
  "secured loan",
  "secured loans",
  "working capital",
  "turnover",
  "GST returns",
  "Section 80C",
  "Section 24(b)",
  "Section 24",
  "tax deduction",
  "tax deductions",
  "KYC verification",
  "processing fees",
  "foreclosure charges",
];

/**
 * Extracts all H2 and H3 headings from content for the Table of Contents
 */
export function extractTableOfContents(content: string): TableOfContentItem[] {
  if (!content) return [];

  const items: TableOfContentItem[] = [];
  const lines = content.split(/\r?\n/);
  const seenIds = new Set<string>();

  for (let line of lines) {
    line = line.trim();
    let level = 0;
    let headingText = "";

    if (line.startsWith("## ")) {
      level = 2;
      headingText = line.replace(/^##\s+/, "").trim();
    } else if (line.startsWith("### ")) {
      level = 3;
      headingText = line.replace(/^###\s+/, "").trim();
    } else if (line.startsWith("<h2")) {
      level = 2;
      const match = line.match(/<h2[^>]*>(.*?)<\/h2>/i);
      if (match) headingText = match[1];
    } else if (line.startsWith("<h3")) {
      level = 3;
      const match = line.match(/<h3[^>]*>(.*?)<\/h3>/i);
      if (match) headingText = match[1];
    }

    if (headingText && level > 0) {
      const cleanText = headingText.replace(/[*_#]/g, "").trim();
      let id = slugifyHeading(cleanText);

      // Deduplicate IDs if identical
      let counter = 1;
      let uniqueId = id;
      while (seenIds.has(uniqueId)) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      seenIds.add(uniqueId);

      items.push({
        id: uniqueId,
        text: cleanText,
        level,
      });
    }
  }

  return items;
}

/**
 * Automatically applies semantic tags (H2, H3, P, lists),
 * bolds key financial concepts, and adds contextual internal links.
 */
export function autoFormatAndInterlinkContent(rawText: string): string {
  if (!rawText) return "";

  const lines = rawText.split(/\r?\n/);
  const formattedBlocks: string[] = [];
  let inList = false;
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      formattedBlocks.push(currentList.join("\n"));
      currentList = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();

    if (!rawLine) {
      flushList();
      continue;
    }

    // Divider
    if (rawLine === "---" || rawLine === "***" || rawLine === "___") {
      flushList();
      formattedBlocks.push("---");
      continue;
    }

    // Existing Markdown heading
    if (rawLine.startsWith("# ") || rawLine.startsWith("## ") || rawLine.startsWith("### ") || rawLine.startsWith("#### ")) {
      flushList();
      formattedBlocks.push(rawLine);
      continue;
    }

    // Markdown Table lines
    if (rawLine.startsWith("|") && rawLine.endsWith("|")) {
      flushList();
      formattedBlocks.push(rawLine);
      continue;
    }

    // Detect bullet or numbered lists
    if (/^[-*•]\s+/.test(rawLine) || /^\d+\.\s+/.test(rawLine)) {
      currentList.push(rawLine);
      inList = true;
      continue;
    } else {
      flushList();
    }

    // Detect if this line looks like a major section heading (H2)
    const isHeadingCandidate =
      rawLine.length < 90 &&
      !rawLine.endsWith(".") &&
      !rawLine.endsWith(",") &&
      !rawLine.includes("http") &&
      (/^(Why|How|Top|What|Key|Essential|Complete|Understanding|Tips|Step|Benefits|Eligibility|Documents|Conclusion|Summary|Frequently|Overview|Comparison)/i.test(rawLine) ||
        /^[0-9]+\.\s+[A-Z]/.test(rawLine) ||
        rawLine.endsWith(":"));

    if (isHeadingCandidate && !rawLine.startsWith("<h")) {
      const cleanTitle = rawLine.replace(/:$/, "").replace(/^\d+\.\s+/, "");
      if (rawLine.length < 50 && (cleanTitle.toLowerCase().includes("step") || cleanTitle.toLowerCase().includes("reason") || /^\d+\./.test(rawLine))) {
        formattedBlocks.push(`### ${rawLine.replace(/:$/, "")}`);
      } else {
        formattedBlocks.push(`## ${rawLine.replace(/:$/, "")}`);
      }
      continue;
    }

    formattedBlocks.push(rawLine);
  }

  flushList();

  let processedText = formattedBlocks.join("\n\n");

  // Step 2: Auto-bold label prefixes
  processedText = processedText.replace(
    /(^|\n)(Note|Important|Tip|Warning|Eligibility|Documents|Process|Benefit|Advantage|Key Takeaway):\s*/gi,
    "$1**$2:** "
  );

  // Step 3: Auto-bold key financial entities
  KEYWORDS_TO_BOLD.forEach((term) => {
    const regex = new RegExp(`(?<!\\*\\*|\\b[A-Za-z])(${term})(?!\\*\\*|[A-Za-z])`, "gi");
    processedText = processedText.replace(regex, (match) => `**${match}**`);
  });

  // Step 4: Intelligent Interlinking
  const linkedPhrases = new Set<string>();

  INTERNAL_LINKS.forEach(({ phrase, url }) => {
    if (linkedPhrases.has(phrase.toLowerCase())) return;

    const linkRegex = new RegExp(`(?<!\\[|\\/)(?<!\\[[^\\]]*)\\b(${phrase})\\b(?![^\\[]*\\])(?![^<]*>)`, "i");

    if (linkRegex.test(processedText)) {
      processedText = processedText.replace(linkRegex, (match) => {
        linkedPhrases.add(phrase.toLowerCase());
        return `[${match}](${url})`;
      });
    }
  });

  return processedText;
}

/**
 * Converts Markdown tables into responsive HTML tables
 */
function parseMarkdownTable(tableText: string): string {
  const lines = tableText.trim().split("\n").filter((l) => l.trim().startsWith("|"));
  if (lines.length < 2) return tableText;

  const headerLine = lines[0];
  const dataLines = lines.slice(2); // skip header and delimiter line | :--- | :--- |

  const headers = headerLine
    .split("|")
    .map((c) => c.trim())
    .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

  let theadHtml = '<thead class="bg-navy-900 text-white font-bold text-xs uppercase tracking-wider"><tr>';
  headers.forEach((h) => {
    theadHtml += `<th class="py-3 px-4 text-left border border-navy-800">${h}</th>`;
  });
  theadHtml += "</tr></thead>";

  let tbodyHtml = '<tbody class="divide-y divide-slate-100 bg-white text-xs">';
  dataLines.forEach((line) => {
    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

    if (cells.length > 0) {
      tbodyHtml += '<tr class="hover:bg-slate-50 transition-colors">';
      cells.forEach((cell, idx) => {
        // Parse bold inside cells
        let parsedCell = cell.replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold text-navy-900">$1</strong>');
        if (idx === 0) {
          tbodyHtml += `<td class="py-3 px-4 font-bold text-navy-900 border border-slate-200 bg-slate-50/50">${parsedCell}</td>`;
        } else {
          tbodyHtml += `<td class="py-3 px-4 text-slate-700 border border-slate-200">${parsedCell}</td>`;
        }
      });
      tbodyHtml += "</tr>";
    }
  });
  tbodyHtml += "</tbody>";

  return `<div class="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-xs"><table class="w-full border-collapse text-left">${theadHtml}${tbodyHtml}</table></div>`;
}

/**
 * Converts Markdown + HTML into fully styled semantic HTML with anchor IDs for Table of Contents
 */
export function renderFormattedContentHtml(content: string): string {
  if (!content) return "";

  let html = content;

  // Track unique IDs for headings
  const seenHeadingIds = new Set<string>();

  // Convert H2 headings with matching anchor IDs
  html = html.replace(/^## (.*$)/gim, (match, title) => {
    const cleanText = title.replace(/[*_#]/g, "").trim();
    let id = slugifyHeading(cleanText);
    let counter = 1;
    let uniqueId = id;
    while (seenHeadingIds.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    seenHeadingIds.add(uniqueId);

    return `<h2 id="${uniqueId}" class="scroll-mt-28 text-xl sm:text-2xl font-display font-extrabold text-navy-900 mt-10 mb-4 pt-4 border-t border-slate-100 flex items-center gap-2.5"><span class="w-1.5 h-6 bg-blue-brand rounded-full inline-block flex-shrink-0"></span><span>${title}</span></h2>`;
  });

  // Convert H3 headings with matching anchor IDs
  html = html.replace(/^### (.*$)/gim, (match, title) => {
    const cleanText = title.replace(/[*_#]/g, "").trim();
    let id = slugifyHeading(cleanText);
    let counter = 1;
    let uniqueId = id;
    while (seenHeadingIds.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    seenHeadingIds.add(uniqueId);

    return `<h3 id="${uniqueId}" class="scroll-mt-28 text-base sm:text-lg font-display font-bold text-navy-900 mt-7 mb-3 text-blue-950 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-brand inline-block flex-shrink-0"></span><span>${title}</span></h3>`;
  });

  // Convert H1 headings
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mt-8 mb-4">$1</h1>');

  // Convert Bold **text**
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-extrabold text-navy-900">$1</strong>');

  // Convert Italics *text*
  html = html.replace(/\*(.*?)\*/gim, '<em class="italic text-slate-800">$1</em>');

  // Convert Markdown links [text](url)
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/gim,
    '<a href="$2" class="text-blue-brand font-bold underline decoration-blue-brand/40 underline-offset-4 hover:text-navy-900 hover:decoration-blue-brand transition-colors inline-flex items-center gap-0.5">$1</a>'
  );

  // Convert dividers
  html = html.replace(/^---$/gim, '<hr class="border-t border-slate-200 my-8" />');

  // Convert blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="p-4 my-5 border-l-4 border-cyan-brand bg-cyan-50/50 rounded-r-xl text-slate-800 font-medium italic">$1</blockquote>');

  // Separate markdown tables and paragraphs
  const blocks = html.split(/\n{2,}/);
  const renderedBlocks: string[] = [];

  for (let block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Check if block is a markdown table
    if (trimmed.startsWith("|") && trimmed.includes("\n|")) {
      renderedBlocks.push(parseMarkdownTable(trimmed));
      continue;
    }

    if (
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("<blockquote") ||
      trimmed.startsWith("<div")
    ) {
      renderedBlocks.push(trimmed);
      continue;
    }

    // Check if bullet list
    if (/^[-*•]\s+/m.test(trimmed)) {
      const items = trimmed
        .split(/\n/)
        .filter((l) => l.trim())
        .map((l) => `<li class="leading-relaxed flex items-start gap-2.5"><span class="text-emerald-600 font-bold mt-0.5">✓</span><span>${l.replace(/^[-*•]\s+/, "")}</span></li>`)
        .join("");
      renderedBlocks.push(`<ul class="space-y-2.5 my-5 text-slate-700 bg-slate-50/60 p-4 rounded-xl border border-slate-100">${items}</ul>`);
      continue;
    }

    // Check if numbered list
    if (/^\d+\.\s+/m.test(trimmed)) {
      const items = trimmed
        .split(/\n/)
        .filter((l) => l.trim())
        .map((l, idx) => {
          const num = l.match(/^(\d+)\.\s+/)?.[1] || `${idx + 1}`;
          return `<li class="leading-relaxed flex items-start gap-3"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-brand text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">${num}</span><span>${l.replace(/^\d+\.\s+/, "")}</span></li>`;
        })
        .join("");
      renderedBlocks.push(`<ol class="space-y-3 my-5 text-slate-700">${items}</ol>`);
      continue;
    }

    // Regular paragraph
    renderedBlocks.push(`<p class="leading-relaxed text-slate-700 my-4 text-sm sm:text-base">${trimmed.replace(/\n/g, "<br />")}</p>`);
  }

  return renderedBlocks.join("\n");
}

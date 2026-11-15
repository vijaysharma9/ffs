export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-brand rounded-full animate-spin" />
        <span className="text-xs font-bold text-navy-900 tracking-wide">
          Loading Fast Fincorp Services...
        </span>
      </div>
    </div>
  );
}

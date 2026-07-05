export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e8dcc8] bg-[#fffaf2] px-4 py-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-lg border border-[#e8dcc8] bg-[#f6f1e8] p-4">
          <p className="text-sm font-semibold text-[#8c4f2b]">免責聲明</p>
          <p className="mt-1 text-xs leading-relaxed text-[#6b5a48]">
            本工具為研究原型／教育用途，非心理治療、非臨床評估工具。
            內容基於《Tailoring Treatment to Attachment Patterns: Healing Trauma in Relationships》（Fosha & Pando-Mars, 2025）一書的 AEDP 取向。
            若您正在經歷心理困擾，請尋求專業協助。
          </p>
        </div>

        <div className="rounded-lg border border-[#e8dcc8] bg-[#f6f1e8] p-4">
          <p className="text-sm font-semibold text-[#8c4f2b]">台灣求助資源</p>
          <ul className="mt-2 space-y-1 text-xs text-[#6b5a48]">
            <li>安心專線：<span className="font-bold text-[#8c4f2b]">1925</span>（依舊愛我）</li>
            <li>張老師專線：<span className="font-bold text-[#8c4f2b]">1980</span>（依舊幫您）</li>
            <li>生命線協談專線：<span className="font-bold text-[#8c4f2b]">1995</span>（依舊救我）</li>
            <li>婦幼保護專線：113　·　報案：110</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://www.leepsyclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#8c4f2b] underline-offset-4 hover:underline"
          >
            李政洋身心診所首頁
          </a>
          <a
            href="https://blog.leepsyclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#8c4f2b] underline-offset-4 hover:underline"
          >
            訂閱電子報
          </a>
          <a
            href="https://buymeacoffee.com/CYlee"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8c4f2b] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buy me a coffee
          </a>
        </div>

        <p className="text-center text-[10px] text-[#b8a88f]">
          Healing Trauma &amp; Relationship · 依附型態對話練習 · Powered by AEDP
        </p>
      </div>
    </footer>
  );
}

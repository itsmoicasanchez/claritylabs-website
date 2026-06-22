export default function Footer() {
  return (
    <footer className="border-t-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#fafaf7] py-10 font-mono">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs tracking-widest mb-2">------------------------------------------------</p>
        <p className="text-lg font-bold tracking-widest mb-1">**** THANK YOU FOR YOUR PURCHASE ****</p>
        <p className="text-sm tracking-widest mb-4">**** SAVE THIS RECEIPT ****</p>
        <p className="text-xs tracking-widest mb-2">------------------------------------------------</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs tracking-wide">
          <div>
            <p className="font-bold mb-2">CLARITYLABS</p>
            <p>HYALURONIC ACID SERUM</p>
            <p>30ML / $24.99</p>
          </div>
          <div>
            <p className="font-bold mb-2">CONTACT</p>
            <p>SUPPORT@CLARITYLABS.COM</p>
            <p>MON-FRI 9AM-5PM EST</p>
          </div>
          <div>
            <p className="font-bold mb-2">POLICIES</p>
            <p>30-DAY RETURNS</p>
            <p>FREE SHIPPING OVER $35</p>
          </div>
        </div>
        <p className="text-xs tracking-widest mb-2">------------------------------------------------</p>
        <p className="text-xs tracking-widest">© {new Date().getFullYear()} CLARITYLABS. ALL RIGHTS RESERVED.</p>
        <p className="text-xs tracking-widest mt-1">** KEEP AWAY FROM CHILDREN **</p>
      </div>
    </footer>
  )
}

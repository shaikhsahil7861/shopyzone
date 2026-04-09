export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">About ShopyZone</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Sell products on ShopyZone</a></li>
              <li><a href="#" className="hover:underline">Sell on ShopyZone Business</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">ShopyZone Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">ShopyZone Business Card</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#" className="hover:underline">ShopyZone Currency Converter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tight text-[#febd69]">ShopyZone</div>
          <div className="text-sm text-gray-400">
            © 2026 ShopyZone.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Web Development",
  "Website Design",
  "Web Hosting",
  "IT Support",
  "Computer Repairs",
  "Business Email",
];

export default function Footer() {
  return (
    <footer className="bg-mdb-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              MDB<span className="text-mdb-orange">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Professional web development, hosting, IT support, and computer
              repairs for small businesses in Kelowna, BC and the Okanagan.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              Serving Kelowna, West Kelowna, Penticton, Vernon, and the
              Okanagan Valley.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:contact@mdbdevelopment.com"
                  className="hover:text-mdb-orange transition-colors"
                >
                  contact@mdbdevelopment.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:dante@mdbdevelopment.com"
                  className="hover:text-mdb-orange transition-colors"
                >
                  dante@mdbdevelopment.com
                </a>
              </li>
              <li>
                <a
                  href="tel:2507188479"
                  className="hover:text-mdb-orange transition-colors"
                >
                  Dante: (250) 718-8479
                </a>
              </li>
              <li>
                <a
                  href="tel:2507180202"
                  className="hover:text-mdb-orange transition-colors"
                >
                  Milan: (250) 718-0202
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                Mon–Fri, 9 AM – 6 PM PST
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MDB Development & IT Services.
            All rights reserved.
          </p>
          <p>Kelowna, BC, Canada</p>
        </div>
      </div>
    </footer>
  );
}

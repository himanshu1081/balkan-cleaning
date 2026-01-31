import balkanLogo from "@/assets/balkan-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={balkanLogo}
              alt="Balkan Cleaning Ltd"
              className="h-12 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#services"
              className="text-primary-foreground/70 hover:text-crimson-light transition-colors"
            >
              Services
            </a>
            <a
              href="#reviews"
              className="text-primary-foreground/70 hover:text-crimson-light transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/70 hover:text-crimson-light transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Balkan Cleaning Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

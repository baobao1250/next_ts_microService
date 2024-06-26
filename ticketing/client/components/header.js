import Link from "next/link";

export default ({ currentUser }) => {
  const links = [
    !currentUser && { lable: "Sign in", href: "/auth/signin" },
    !currentUser && { lable: "Sign up", href: "/auth/signup" },
    currentUser && { lable: "Sign out", href: "/auth/signout" },
  ]
    .filter((link) => link)
    .map((item) => (
      <li key={item.href} className="nav-item">
        <Link href={item.href} className="nav-link">
          {item.lable}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        GitTix
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

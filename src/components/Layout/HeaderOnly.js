function HeaderOnly({ children }) {
  return (
    <div>
      <header className="bg-gray-100 shadow-md p-3">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <img src="/logo.png" className="h-11 w-23" alt="logo" />
          </a>
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  );
}

export default HeaderOnly;

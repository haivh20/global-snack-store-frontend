const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Navbar</div>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default AdminLayout;

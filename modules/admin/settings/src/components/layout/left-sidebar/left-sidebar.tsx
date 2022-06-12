import Sidebar from "../sidebar/sidebar";

interface LeftSidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function LeftSidebar({ children, ...props }: LeftSidebarProps) {
  return (
    <Sidebar
      pr="1rem"
      borderRight={"1px solid"}
      borderColor={"gray.200"}
      {...props}
    >
      {children}
    </Sidebar>
  );
}

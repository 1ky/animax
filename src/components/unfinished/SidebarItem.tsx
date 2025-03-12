import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
}

const SidebarItem = ({ icon, text }: Props) => {
  return (
    <li className="relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer gap-2 hover:bg-secondary hover:text-primary">
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default SidebarItem;

import { VscGithubInverted } from "react-icons/vsc"

const Sidebar = () =>{
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

            <SidebarIcon icon={<VscGithubInverted size="28"/>} text={"Home"}/>
            <Divider/>
            <SidebarIcon icon={<VscGithubInverted size="28"/>} text={"Exchange"}/>
            <SidebarIcon icon={<VscGithubInverted size="28"/>} text={"Stake"}/>
            <Divider/>
            <SidebarIcon icon={<VscGithubInverted size="28"/>} text={"About"}/>
            
        </div>
    );

};

const SidebarIcon =({icon, text}) =>(
    <div className="sidebar-icon group">
        {icon} 
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);
const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { IoBagHandleOutline, IoSettingsOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const navLinks = [
	,
	{ title: 'Overview', path: '/', icon: <MdOutlineSpaceDashboard /> },
	{ title: 'Products', path: '/products', icon: <IoBagHandleOutline />},
	{ title: 'Orders', path: '/orders', icon: <CiShoppingCart />},
	{ title: 'Finance', path: '/finance', icon: <RiMoneyEuroCircleLine /> },
	{ title: 'Reports', path: '/reports',icon: <TbReportSearch /> },
	{ title: 'Settings', path: '/settings', icon:<IoSettingsOutline /> },
]

type SidebarProps = {
	isOpen: boolean // Type for a boolean prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
	const path = usePathname()
	const pathname = '/' + path.split('/')[1]
	return (
		<aside
			id="default-sidebar"
			className={`fixed bg-[#373737] top-0 left-0 z-40 w-64 h-screen transition-transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} sm:translate-x-0`}
			aria-label="Sidebar"
		>
			<div className="h-full px-3 py-4 overflow-y-auto">
				<div className="flex w-full justify-start mb-8">
					<Image
						src={'https://i.ibb.co/MBVW4Xj/black-transparent.png'}
						alt="table tap"
						width={120}
						height={120}
						className="w-1/2"
						draggable="false"
						onContextMenu={e => {
							e.preventDefault()
						}}
					/>
				</div>
				<ul className="space-y-2 font-medium">
					{navLinks.map(link => {
						return (
							<li
								key={link.path}
								className={`${pathname == link.path ? 'border-l-4 border-[#2cc56f] rounded-lg' : ''}`}
							>
								<a
									href={link.path}
									className={`flex items-center p-2 text-gray-300 hover:no-underline rounded-lg no-underline text:[#828282] group ${pathname == link.path ? 'bg-[#505251] text-[#2CC56F]' : ''}`}
								>
									{link?.icon && (
										<span className="text-gray-400 group-hover:text-[#2cc56f]">
											{link.icon}
										</span>
									)}

									<span className="ms-3 no-underline group-hover:text-[#2cc56f]">
										{link.title}
									</span>
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar

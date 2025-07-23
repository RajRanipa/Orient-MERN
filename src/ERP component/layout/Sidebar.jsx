import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiChevronRight,
  FiHome,
  FiUsers,
  FiSettings,
  FiSearch,
  FiArrowLeft
} from 'react-icons/fi';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const currentUserRole = 'admin';
  // const currentUserRole = 'manager'; // for testing 

  const navGroups = [
    { name: 'Dashboard', to: '/orient/Dashbord', icon: <FiHome /> },
    { name: 'Users', to: '/orient/users', icon: <FiUsers />, roles: ['admin', 'manager'], badge: 3 },
    {
      name: 'Account',
      to: '/orient/account',
      icon: <FiUsers />,
      roles: ['admin'], // 👈 parent menu access
      child: [
        { name: 'Ledger', to: '/orient/ledger', roles: ['admin', 'accountant'] },
        { name: 'Ledger1', to: '/orient/ledger1' }, // 👈 this one is public
      ]
    },
    { name: 'Settings', to: '/orient/settings', icon: <FiSettings />, roles: ['admin'] },
  ];

  const toggleGroup = (name) => {
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filterItems = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-64'
        } transition-all duration-300 bg-surface text-black border-r border-border hidden md:flex flex-col`}
    >
      <div className="h-12 flex items-center px-4 border-b border-border">
        <div className={`w-full flex items-center justify-center rounded-xl px-2 ${focus ? 'bg-inputBg' : ''} transition-colors duration-200`}>
          <input
            type="text"
            className={`w-full px-3 py-1.5 text-sm bg-transparent text-inputText capitalize focus:outline-none focus:ring-0 rounded-xl ${collapsed ? 'hidden' : ''}`}
            id="search_sidemenu"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-xl text-text-D-dark hover:text-primary-10 transition z-10"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <FiChevronRight className='text-lightBlack' /> : <FiSearch className='text-lightBlack' />}
          </button>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
        {filterItems(navGroups)
          .filter(item => !item.roles || item.roles.includes(currentUserRole))
          .map(({ name, to, icon, child, badge }) => {
            const visibleChildren = child?.filter(c => !c.roles || c.roles.includes(currentUserRole)) || [];
            const hasVisibleChildren = visibleChildren.length > 0;

            return (
              <div key={name} className="relative group">
                <NavLink
                  to={to}
                  role={hasVisibleChildren ? 'button' : undefined}
                  aria-expanded={hasVisibleChildren ? openGroups[name] : undefined}
                  className={({ isActive }) => `flex items-center justify-between gap-3 px-3 py-2 text-lightBlack ${isActive
                    ? 'text-primary'
                    : 'hover:text-gray'
                    }`}
                  onClick={(e) => {
                    if (hasVisibleChildren) {
                      // e.preventDefault();
                      setOpenGroups({ [name]: !openGroups[name] });
                    } else {
                      setOpenGroups({});
                    }
                  }}
                  id={`${name}_atag`}
                >
                  <div className="flex items-center gap-3 rounded-md transition-colors">
                    <span className="text-xl relative">
                      {icon}
                      {badge > 0 && (
                        (collapsed && <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[10px] w-[15px] h-[15px] p-0 flex items-center justify-center rounded-full leading-none">
                          {badge}
                        </span>)
                      )}
                    </span>
                    {!collapsed && <span className="relative text-sm font-medium">{name}
                    {badge > 0 && (
                        (!collapsed && <span className="absolute -top-1 -right-4 bg-red-500 text-white text-[10px] w-[15px] h-[15px] p-0 flex items-center justify-center rounded-full leading-none">
                          {badge}
                        </span>)
                      )}
                    </span>}
                  </div>
                  {!collapsed && hasVisibleChildren && (
                    <span
                      onClick={() => toggleGroup(name)}
                      className="pr-2 text-gray-500 text-xl">
                      {openGroups[name] ? <FiChevronRight className='rotate-90 transition-transform duration-450' /> : <FiChevronRight className=' transition-transform duration-450' />}
                    </span>
                    
                  
                  )}
                </NavLink>

                {hasVisibleChildren && (
                  <div
                    className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openGroups[name] ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="mt-1 space-y-1">
                      {visibleChildren.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.to}
                          className={({ isActive }) =>
                            `block text-sm pl-2 py-1 rounded hover:text-primary-10 ${
                              isActive ? 'text-primary' : 'text-lightBlack'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}

                {collapsed && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
      </nav>
    </aside>
  );
};

export default Sidebar;

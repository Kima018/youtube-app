import {useRef, useState, useEffect} from "react";

function Dropdown({children, label}) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef()


   const handleClickOutside = (e) => {
        console.log((e.target))
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen((isOpen) => !isOpen)


    return <div className='relative' ref={menuRef}>
        <button className='rounded-full p-2 hover:bg-neutral-500' onClick={toggleDropdown}>{label}</button>
        {isOpen && <div className='absolute px-4 py-2 rounded border right-0 menu-bg'>
            <ul className='min-w-max divide-y'>
                {children}
            </ul>
        </div>}
    </div>
}

export default Dropdown

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link className="navbar__link relative" href="/">
                        Home
                    </Link>
                    <Link className="navbar__link relative" href="/me">
                        Who am I?
                    </Link>
                    <Link className="navbar__link relative" href="/contacts-and-location">
                        Contacts and Location
                    </Link>
                    <Link className="navbar__link relative" href="/demerit-points">
                        Demerit points
                    </Link>
                    <Link className="navbar__link relative" href="/residence-matters">
                        Residence Matters
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar
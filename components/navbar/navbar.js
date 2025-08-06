import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import src from "../../public/images/logo.png";
import { useRouter } from "next/router";
import { HiBars3 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";


function navbar() {
  const router = useRouter();
  const links = [
    { route: "Home", path: "/" },
    { route: "Services", path: "/services" },
    { route: "About", path: "/about" },
    { route: "Blogs", path: "/blogs" },
    { route: "Contact us", path: "/contact" },
  ];
  
  const [show, setShow] = useState(false);

  return (
    <header className={`${styles.container} container`}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image src={src} width={50} height="50" />
          <span style={{marginLeft: '-12px',marginBottom: '-4px'}}>
            <h3>
              ed
              <span className={styles.l}>L</span>ab
            </h3>
          </span>
          </a>
      </Link>
      <nav className={styles.nav}>
        {links.map((link, i) => (
          <Link href={link.path} key={i}>
            <a
              className={router.route == link.path ? styles.active : router.route !== link.path && router.route != '/' ? styles.rout: undefined }
              style={{fontWeight: 'bold'}}
            >
              {link.route}
            </a>
          </Link>
        ))}
      </nav>
      <div
        className={styles.icon}
        onClick= {() => {setShow(true)}}
        >
          <HiBars3 />
        </div>
      <nav 
        className={styles.vertical} 
        style={{
          transform: show ? 'translateX(0)': undefined ,
        }}
      >
        {links.map((link, i) => (
            <Link href={link.path} key={i}>
              <a className={router.route == link.path ? styles.active : ''}>{link.route}</a>
            </Link>
          ))}
          <div 
            className={styles.close}
            onClick={()=>{setShow(false)}}
          >
            <ImCross />
          </div>
      </nav>
    </header>
  );
}

export default navbar;

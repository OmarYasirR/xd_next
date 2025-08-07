import React from 'react'
import styles from './service.module.css'
import data from '../../Data/services.json'
import {GiLungs, GiTestTubes} from 'react-icons/gi'
import {FaBacterium} from 'react-icons/fa'
import {TbVaccine} from 'react-icons/tb'
import {CiMedicalMask} from 'react-icons/ci'
import {RiVirusLine} from 'react-icons/ri'

export default function Service() {
  const icons = [<RiVirusLine key={'VirusLine'} />, <GiLungs key={'GiLungs'} />,<GiTestTubes key='jj' />,<FaBacterium key='oo'/>,<TbVaccine key={'gy'} />,<CiMedicalMask key='oopp' />]
  return (
    <div className={`${styles.service} container`}>
      <h4 className="mainHeading">
        services
      </h4>
      <h1 className='mainh1'>Specialized laboratory tests tailored to the patient</h1>
      <div className={styles.cont}>
        {data.map((item, i) => (
          <div className={`${styles.box} box`} key={i}>
            <div
              className={styles.icon}
              style={{background: item.bk,
                color: item.color
              }}
            >
              <div key={i}>{icons[i]}</div>
            </div>
            <h3>{item.serv}</h3>
            <p className='pa'>{item.discribtion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from "./home";
import { homePage } from "../data/metaData";

export default function HomePage() {
  return (
   <Home />
  )
}

import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import classes from '../styles/error.module.scss';

export default function Error() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error</h1>
      <p>Please <Link href="/">go back</Link></p>
    </MainLayout>
  )
}

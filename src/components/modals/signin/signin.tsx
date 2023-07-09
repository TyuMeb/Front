import styles from "./signin.module.css";
import Image from "next/image";
import illustration1 from "@public/signin_illustration1.png";
import illustration2 from "@public/signin_illustration2.png";

const SignIn = () => {
    return (
        <div className={styles.window}>
            <Image
                src={illustration1}
                alt={"иллюстрация двух людей которые говорят привет"}
                className={styles.illustration1}
            />
            <Image src={illustration2} alt={"иллюстрация города"} className={styles.illustration2} />
        </div>
    );
};

export default SignIn;

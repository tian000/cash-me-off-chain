import React from "react"
import {Box, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react"

export default function Home() {
    return (
        <Flex align="center" justify="center" direction={"column"}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Stat>
                    <StatLabel>Current Balance</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase'/>
                        23.36%
                    </StatHelpText>
                </Stat>
            </Box>


            <Box display="flex" alignItems="center" justifyContent="space-between">
                5000
            </Box>
            Flex Container
        </Flex>)
    // return (
    //   <main className={styles.main}>
    //     <div className={styles.description}>
    //       <p>
    //        HELLO JAMES Get started by editing&nbsp;
    //         <code className={styles.code}>src/app/page.tsx</code>
    //       </p>
    //       <div>
    //         <a
    //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           By{' '}
    //           <Image
    //             src="/vercel.svg"
    //             alt="Vercel Logo"
    //             className={styles.vercelLogo}
    //             width={100}
    //             height={24}
    //             priority
    //           />
    //         </a>
    //       </div>
    //     </div>
    //
    //     <div className={styles.center}>
    //       <Image
    //         className={styles.logo}
    //         src="/next.svg"
    //         alt="Next.js Logo"
    //         width={180}
    //         height={37}
    //         priority
    //       />
    //     </div>
    //
    //     <div className={styles.grid}>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2>
    //           Docs <span>-&gt;</span>
    //         </h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>
    //
    //       <a
    //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2>
    //           Learn <span>-&gt;</span>
    //         </h2>
    //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //       </a>
    //
    //       <a
    //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2>
    //           Templates <span>-&gt;</span>
    //         </h2>
    //         <p>Explore the Next.js 13 playground.</p>
    //       </a>
    //
    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2>
    //           Deploy <span>-&gt;</span>
    //         </h2>
    //         <p>
    //           Instantly deploy your Next.js site to a shareable URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    // )
}

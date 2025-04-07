import React from 'react'; // Reactをインポート
import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import styles from "../../styles/page.module.css";

  const ProfilePage = () => {
    return (
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <div className={styles.Profile_Top}>
          <Image src="/icons/my_icon.jpg" alt="profile" width={200} height={200} />
          <main>
            <h1 className={styles.ProfileTitle}>YADOYADO</h1>
            <h2>やどやど</h2>
            <h3 className={styles.ProfileSubttitle}>
              愛知県で情報学を学んでいます。趣味はMinecraft,CG(Blender)、映像制作、旅行です。Minecraftを触った経験を用いて、CG、VR、GISなどを繋ぎ合わせ、CGやシミュレーションを誰でも手軽に触れるようなものにし、開発したいと考えております。
            </h3>
          </main>
        </div>
        <div className={styles.Skill_Box}>
          <h1 style={{ textAlign: 'left' }}>Currently Learning...</h1>
          <div className={styles.Skill_list}>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/blender.png" alt="Blender" width={70} height={70} />
              <p>Blender</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/html.png" alt="HTML" width={70} height={70} />
              <p>HTML</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/css.png" alt="CSS" width={70} height={70} />
              <p>CSS</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/java.webp" alt="Java" width={70} height={70} />
              <p>Java</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/c.png" alt="C" width={70} height={70} />
              <p>C</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/javascript.png" alt="Javasrcipt" width={70} height={70} />
              <p>Javascript</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/typescript.webp" alt="Typescript" width={70} height={70} />
              <p>Typescript</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/nodejs.png" alt="Nodejs" width={70} height={70} />
              <p>Node.js</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/skills/react.png" alt="react" width={70} height={70} />
              <p>React</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
          </div>
        </div>

        <div className={styles.Skill_Box}>
          <h1 style={{ textAlign: 'left' }}>　+Interests</h1>
          <div className={styles.Skill_list}>
            <div className={styles.Skill_item}>
              <Image src="/images/Interests/game.svg" alt="Minecraft" width={70} height={70} />
              <p>Minecraft</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/interest/camera.svg" alt="camera" width={70} height={70} />
              <p>Photo</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/interest/movie.svg" alt="movie" width={70} height={70} />
              <p>Movie Edit</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/interest/server.svg" alt="server" width={70} height={70} />
              <p>Server</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/interest/3dmodel.svg" alt="3dmodel" width={70} height={70} />
              <p>3DCG</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/interest/universe.svg" alt="universe" width={70} height={70} />
              <p>Universe</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/interest/walking.svg" alt="walk" width={70} height={70} />
              <p>Walking</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
          </div>
        </div>

      </div>
    );
  };

export default ProfilePage; // コンポーネントをエクスポート
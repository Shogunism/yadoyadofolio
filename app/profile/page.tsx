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
              <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/blender.png" alt="Blender" width={70} height={70} />
              </div>
              <p>Blender</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/html.png" alt="HTML" width={70} height={70} />
            </div>
              <p>HTML</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/css.png" alt="CSS" width={70} height={70} />
            </div> 
              <p>CSS</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/java.webp" alt="Java" width={70} height={70} />
            </div>
              <p>Java</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/c.png" alt="C" width={67.2} height={70} />
            </div> 
             <p>C</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/javascript.png" alt="Javasrcipt" width={70} height={70} />
            </div>
              <p>Javascript</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/typescript.webp" alt="Typescript" width={70} height={70} />
            </div>
              <p>Typescript</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/nodejs.png" alt="Nodejs" width={62.2222222} height={70} />
              </div>
              <p>Node.js</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
            <div style={{ width: 70 , height: 70 }}>
              <Image src="/images/Skills/react.png" alt="react" width={70} height={61.9791667} />
              </div>
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
              <Image src="/images/Interests/camera.svg" alt="camera" width={70} height={70} />
              <p>Photo</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
            <div className={styles.Skill_item}>
              <Image src="/images/Interests/movie.svg" alt="movie" width={70} height={70} />
              <p>Movie Edit</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/Interests/server.svg" alt="server" width={70} height={70} />
              <p>Server</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/Interests/3dmodel.svg" alt="3dmodel" width={70} height={70} />
              <p>3DCG</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/Interests/universe.svg" alt="universe" width={70} height={70} />
              <p>Universe</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>

            <div className={styles.Skill_item}>
              <Image src="/images/Interests/walking.svg" alt="walk" width={70} height={70} />
              <p>Walking</p> {/* Blenderのロゴの下に文字を追加 */}
            </div>
          </div>
        </div>

      </div>
    );
  };

export default ProfilePage; // コンポーネントをエクスポート
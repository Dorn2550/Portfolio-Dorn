import { useRef } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    useGSAP(() => {
        const project = [project1Ref.current, project2Ref.current, project3Ref.current];
        project.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        }) 
        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 }, 
            { opacity:1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>ภารกิจโค้ดคืนโลก (BlockBound)</h2>
                            <p className="text-white-50 md:text-xl">
โปรแกรมเพื่อการศึกษาในรูปแบบ 2 มิติ (2D) มุมมองจากด้านบน (Top-Down View) ที่ใช้กราฟิกแนว Pixel Art โดยผสมผสานความสนุกของการเล่นเกม แนวแก้ปริศนาเข้ากับการเรียนรู้พื้นฐานการเขียนโปรแกรมผ่านรูปแบบคำสั่งแบบบล็อก (Block-Based Coding) ผู้เล่นจะได้รับบทเป็น “Lumo” โปรแกรมเมอร์ที่ถูกดูดเข้าไปในโลกของ คอมพิวเตอร์ และต้องใช้การวางแผน คิดเชิงตรรกะ และการเรียงลำดับคำสั่ง เพื่อฝ่าฟันอุปสรรคในแต่ละด่าน และหาทางกลับสู่โลกจริง
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>Active Buddies | Check The exercise form in real time.</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>Smart-Farming | เกษตรอัจฉริยะ</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection

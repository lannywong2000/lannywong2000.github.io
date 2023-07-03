import ALBOSED from '../../assets/projects/albosed.png'
import TECHIEHR from '../../assets/projects/techiehr.png'
import PORTFOLIO from '../../assets/projects/portfolio.png'
import PETERDB from '../../assets/projects/peterdb.png'

const data = [
    {
        id: 1,
        category: 'Full Stack',
        image: TECHIEHR,
        title: "TechieHR, An Integrated Online Coding Interview Platform",
        desc: "TechieHR is a single-page, concurrent, integrated, and interactive solution for conducting online coding interviews. It allows online code execution using the synchronized codepad and real-time communication through video conferencing and chat box. It is completed with ReactJS, NodeJS, Redis, and MongoDB and can be easily deployed using Docker.",
        demo: 'https://github.com/lannywong2000/TechieHR',
        github: 'https://github.com/lannywong2000/TechieHR'
    },
    {
        id: 2,
        category: 'Backend',
        image: PETERDB,
        title: "PeterDB, A Database Management System for SQL",
        desc: " Implemented a DBMS supporting CRUD operations and versioning of tables and records from scratch using C++. Designed a hierarchy with paged file, record-based file and relation managers for bottom-up implementation. Accelerated the process of range searching by maintaining self-implemented B+ tree index files. Built a query engine realizing several relational operators.",
        demo: 'https://github.com/lannywong2000/PeterDB',
        github: 'https://github.com/lannywong2000/PeterDB'
    },
    {
        id: 3,
        category: 'Frontend',
        image: PORTFOLIO,
        title: "Portfolio, A Modern Responsive Personal Website",
        desc: "Designed and built resuable and interactive components using ReactJS. Enabled device-responsive positioning using CSS. Deployed on Github Pages.",
        demo: 'https://lannywong2000.github.io',
        github: 'https://github.com/lannywong2000/lannywong2000.github.io'
    },
    {
        id: 4,
        category: 'AI / ML',
        image: ALBOSED,
        title: "Active Learning-Based Optimization of Scientific Experimental Design",
        desc: "Scientific experiments in the real world are very time and resources consuming. If only better results can be reached with fewer physical experiments conducted. This project performs a retrospective study on a drug response dataset and explores the feasibility of reducing physical experiment quantity while optimizing the result by harnessing the power of Active Learning.",
        demo: 'https://www.computer.org/csdl/proceedings-article/icaice/2021/218600a268/1Et4BV80pck',
        github: 'https://github.com/lannywong2000/ALBOSED'
    }
]


export default data
const experiences = [
    
    {
        id: 1,
        s_company: "Shyena",
        company: "Shyena Solutions Private Limited",
        type: "Full-time",
        start_date: "Sep 2023",
        end_date: null,
        positions: [
            {
                designation: "Software Engineer",
                period: "Sep 2023 - Present",
                description: "",
            }
        ],
        description: [
            {
                "subheading" : "Madhya Pradesh Pollution Control Board (MPPCB - Current)",
                "points" : [
                    `Developed end-to-end portal for MPPCB used by over 33000 industries and 100+
                    employees for day-to-day activities.`,
                    `Led a team to digitize all processes including industry consent, registration, sampling
                    collection, analysis, and IOT data collection.`,
                    `Developed API's by integrating with an IAM called keycloak for complete user
                    authentication and authorization. Also Integrated the API’s in the frontend.`,
                    `Integrated API's with IAM for user authentication, 3rd party services for payment, SMS,
                    email, and government API's for data fetching.`,
                    `Utilized micro-frontend architecture for frontend code organization.`
                ]
            },
            {
                "subheading" : "Data Analytics Platform",
                "points" : [
                    `Spearheaded implementation of a data analytics platform for a prestigious client integrating
                    CSVs, IP flows, web scraping, and logs.`,
                    `Utilized Apache Kafka for building robust data pipelines and Kafka streams for data
                    enrichment.`,
                    `Designed tables in Scylla (NOSQL) database for optimal query time.`,
                    `Developed API's and integrated Celery for queuing tasks and Apache Ignite for data
                    caching.`,
                    `Containerized and deployed scripts and applications using Docker.`
                ]
            },
            {
                "subheading" : "Video Analytics Project for Indian Railways",
                "points" : [
                    `Developed MVP for Indian Railways focused on detecting track failures using an open-
                    source machine learning model and custom training.`,
                    `Built a platform with Django for the backend, React for the front end, and Celery for queuing
                    ML tasks.`
                ]
            },
            {
                "subheading" : "Family Scheme Distribution Platform for the Government of Haryana",
                "points" : [
                    `Designed and implemented a platform for users to create families, see eligible schemes,
                    and apply for them.`,
                    `Developed APIs using Django interacting with databases like Postgres and Elastic Search`,
                    `Utilized Redis for caching frequently accessed data and Dockerized the application for
                    deployment on Azure servers.`
                ]
            }
        ],
    },
    {
        id: 0,
        s_company: "Accenture",
        company: "Accenture Solutions Private Limited",
        type: "Full-time",
        start_date: "Apr 2021",
        end_date : "Aug 2023",
        positions: [
            {
                designation: "Software Engineer",
                period: "Jun 2022 - Aug 2023",
                description: "",
            },
            {
                designation: "Associate Software Engineer",
                period: "Apr 2021 - May 2022",
                description: "",
            }        
        ],
        description: [
            {
                "subheading" : "Duke Energy - Utility Industry",
                "points" : [
                    `Developed a spring boot application for transforming billions of records per day by
                    leveraging technologies like Kafka, and AWS ECS which saved 1000's dollars per month
                    by replacing the existing 3rd party solution.`,

                    `Developed Frontend using react by interacting with Clients and the backend team which
                    was used for critical tasks like billing and maintaining the health of the overall system.`,

                    `Leveraged Microsoft Power Apps to create user-friendly applications, streamlining day-to-
                    day tasks for coworkers and enhancing operational efficiency.`,

                    `Recognized for outstanding contributions through the creation of multiple automation tools
                    and dashboards using Python and Flask, resulting in significant time savings equivalent to
                    100's of man-hours.`,

                    `'Rising Star' award in pinnacal awards FY22 for exceptional performance and
                    innovation.`
                ]
            }
        ],
    }
];

export default experiences;
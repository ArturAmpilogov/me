import { ICertificate } from "../types";

export const certificates: {
  primary: ICertificate[];
  secondary: ICertificate[];
} = {
  primary: [
    {
      name: "EITCA Artificial Intelligence Programme",
      organization: "European Information Technologies Certification Institute",
      dateOfIssue: "2023",
      link: "/certificates/EITCA-AI.pdf",
      tags: [
        "AI",
        "Machine Learning",
        "GCP",
        "Pytorch",
        "Tensorflow",
        "Python",
      ],
    },
    {
      name: "Microsoft Certified Solutions Developer: App Builder",
      organization: "Microsoft",
      dateOfIssue: "2016",
      link: "/certificates/MCSD-App.pdf",
      tags: ["Azure", ".NET", "XAML", "WPF", "Universal Windows Platform"],
    },
    {
      name: "Microsoft Certified Solutions Associate: Web Applications",
      organization: "Microsoft",
      dateOfIssue: "2016",
      link: "/certificates/MCSD-Web.pdf",
      tags: ["Azure", "ASP.NET MVC", ".NET", "HTML", "CSS", "REST API"],
    },
  ],
  secondary: [
    {
      name: "A Complete Guide to Firebase on the Web",
      organization: "Educative",
      dateOfIssue: "2023",
      link: "/certificates/Educative-Firebase.pdf",
      tags: ["Firebase", "Firestore"],
    },
    {
      name: "A Deep Dive into React Hooks",
      organization: "Educative",
      dateOfIssue: "2023",
      link: "/certificates/Educative-React-Hooks.pdf",
      tags: ["React.JS", "React hooks"],
    },
    {
      name: "Blockchain Developer Bootcamp",
      organization: "DAppUniversity",
      dateOfIssue: "2022",
      link: "/certificates/DAppUniversity-Blockchain.pdf",
      tags: ["Blockchain", "dApps", "Solidity", "React.JS"],
    },
    {
      name: "Fundamentals of Parallelism on Intel Architecture",
      organization: "Intel (via Coursera)",
      dateOfIssue: "2021",
      link: "/certificates/Intel-Parallelism.pdf",
      tags: [
        "C",
        "C++",
        "OpenMP",
        "CPU",
        "Distributed Computing",
        "Parallel Computing",
      ],
    },
    {
      name: "Introduction to NoSQL Databases",
      organization: "IBM (via Coursera)",
      dateOfIssue: "2021",
      link: "/certificates/IBM-Nosql.pdf",
      tags: ["MongoDB", "Cassandra", "IBM Cloudant"],
    },
    {
      name: "Functional Programming in Scala (Specialization)",
      organization: "École Polytechnique Fédérale de Lausanne (via Coursera)",
      dateOfIssue: "2021",
      link: "/certificates/EPFL-Scala.pdf",
      tags: ["Scala", "Distributed Computing", "Spark", "Big data"],
    },
    {
      name: "Parallel, Concurrent, and Distributed Programming in Java (Specialization)",
      organization: "Rice University (via Coursera)",
      dateOfIssue: "2021",
      link: "/certificates/Rice-Distributed.pdf",
      tags: [
        "Java",
        "Parallel Computing",
        "Distributed Computing",
        "Hadoop",
        "Spark",
      ],
    },
    {
      name: "CS50x",
      organization: "Harvard University",
      dateOfIssue: "2020",
      link: "/certificates/CS50x.pdf",
      tags: ["C", "Python", "Swift", "Algorithms"],
    },
    {
      name: "Experimental Interaction Design",
      organization: "Professional UX Conference",
      dateOfIssue: "2014",
      link: "/certificates/ProffCoUx.pdf",
      tags: ["User Experience"],
    },
    {
      name: "Microsoft Certified Professional: Windows Applications",
      organization: "Microsoft",
      dateOfIssue: "2013",
      link: "/certificates/MCP-WinApps.pdf",
      tags: [
        "WPF",
        "Windows Presentation Foundation",
        "WinForms",
        "Linq",
        "XAML",
      ],
    },
    {
      name: "Microsoft Certified Professional: Service Communication Applications",
      organization: "Microsoft",
      dateOfIssue: "2012",
      link: "/certificates/MCP-WCF.pdf",
      tags: [
        "WCF",
        "Windows Communication Foundation",
        ".NET",
        "REST",
        "Security",
        "Logging",
      ],
    },

    {
      name: "Silverlight",
      organization: "Internet University of Computer Science",
      dateOfIssue: "2009",
      link: "/certificates/Silverlight.pdf",
      tags: ["Silverlight", ".NET"],
    },
  ],
};

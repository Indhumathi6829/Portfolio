import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def generate_pdf():
    pdf_path = os.path.join("public", "resume.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=30,
        bottomMargin=30
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'NameTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#000000"),
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#222222"),
        spaceAfter=8
    )

    summary_style = ParagraphStyle(
        'SummaryText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#111111"),
        spaceAfter=10
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#000000"),
        spaceBefore=6,
        spaceAfter=3
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor("#000000"),
        spaceAfter=1
    )

    item_sub_style = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#333333"),
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=11.5,
        textColor=colors.HexColor("#111111"),
        spaceAfter=2
    )

    story = []

    # 1. Header
    story.append(Paragraph("INDHUMATHI SELVAKUMAR", title_style))
    story.append(Paragraph(
        'indhu26102006@gmail.com &nbsp;|&nbsp; Coimbatore, Tamil Nadu, India &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/indhumathi-s-794439403/" color="#0056b3"><u>LinkedIn</u></a> &nbsp;|&nbsp; <a href="https://github.com/Indhumathi6829" color="#0056b3"><u>GitHub</u></a>',
        contact_style
    ))

    # 2. Professional Summary
    story.append(Paragraph(
        "AI and software developer focused on building intelligent systems, full-stack applications and computer vision solutions. Experienced with React, Spring Boot, FastAPI, MySQL, REST APIs, JWT authentication, YOLOv8, OpenCV and modern development workflows. Passionate about solving real-world problems through reliable, scalable and user-focused software.",
        summary_style
    ))

    # 3. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#333333"), spaceBefore=1, spaceAfter=5))

    skills = [
        "<b>Programming Languages:</b> Java, C++, Python, SQL, JavaScript",
        "<b>Frontend:</b> React.js, HTML5, CSS3, Bootstrap, Responsive UI",
        "<b>Backend:</b> Spring Boot, FastAPI, RESTful APIs, JWT Authentication",
        "<b>Database:</b> MySQL, SQLite, SQLAlchemy, Pydantic",
        "<b>AI/ML & Computer Vision:</b> YOLOv8, OpenCV, Pandas, NumPy, Matplotlib",
        "<b>Tools:</b> Git, GitHub, Docker, Postman, Pytest"
    ]
    for s in skills:
        story.append(Paragraph(f"• &nbsp; {s}", bullet_style))
    story.append(Spacer(1, 6))

    # 4. Projects
    story.append(Paragraph("PROJECTS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#333333"), spaceBefore=1, spaceAfter=5))

    # Project 1
    story.append(Paragraph("SpiceRoute Kitchen - Food Delivery Platform", item_title_style))
    story.append(Paragraph("<b>Tech Stack:</b> React &nbsp;|&nbsp; Spring Boot &nbsp;|&nbsp; MySQL &nbsp;|&nbsp; JWT &nbsp;|&nbsp; Razorpay &nbsp;|&nbsp; WebSockets", item_sub_style))
    story.append(Paragraph("• &nbsp; Developed a <b>full-stack food delivery platform</b> with customer, restaurant, delivery partner and admin portals, secure JWT authentication, order lifecycle management, coupons, favorites and real-time order tracking.", bullet_style))
    story.append(Paragraph("• &nbsp; Integrated Razorpay payments, WebSocket notifications, restaurant analytics and Docker-based deployment for a scalable multi-role experience.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    story.append(Paragraph("SmartStudent Hub - Student Record Management API", item_title_style))
    story.append(Paragraph("<b>Tech Stack:</b> FastAPI &nbsp;|&nbsp; SQLite &nbsp;|&nbsp; SQLAlchemy &nbsp;|&nbsp; Pydantic &nbsp;|&nbsp; Pytest &nbsp;|&nbsp; React", item_sub_style))
    story.append(Paragraph("• &nbsp; Built a <b>REST API for student record management</b> with CRUD operations, request validation, search, filtering, pagination, statistics and automated pytest coverage.", bullet_style))
    story.append(Paragraph("• &nbsp; Developed a React dashboard for visualizing student records and API responses with a clean, responsive interface.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3
    story.append(Paragraph("AI Crowd Management System", item_title_style))
    story.append(Paragraph("<b>Tech Stack:</b> Python &nbsp;|&nbsp; YOLOv8 &nbsp;|&nbsp; OpenCV &nbsp;|&nbsp; Flask &nbsp;|&nbsp; Tkinter", item_sub_style))
    story.append(Paragraph("• &nbsp; Developed a <b>real-time crowd monitoring system</b> using YOLOv8 object detection, centroid-based tracking and configurable occupancy thresholds.", bullet_style))
    story.append(Paragraph("• &nbsp; Implemented live alerts, dashboard analytics and a Tkinter interface for monitoring people count in limited-capacity spaces.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 4
    story.append(Paragraph("Trusted Vehicle Repair Hub", item_title_style))
    story.append(Paragraph("<b>Tech Stack:</b> Spring Boot &nbsp;|&nbsp; React &nbsp;|&nbsp; MySQL &nbsp;|&nbsp; Spring Security &nbsp;|&nbsp; JWT &nbsp;|&nbsp; REST APIs", item_sub_style))
    story.append(Paragraph("• &nbsp; Built a <b>full-stack vehicle repair management system</b> with customer, shop owner, mechanic and admin portals, JWT authentication, booking management and repair tracking.", bullet_style))
    story.append(Paragraph("• &nbsp; Added mechanic assignment, shop verification, ratings, reviews and responsive dashboards for a complete service workflow.", bullet_style))
    story.append(Spacer(1, 6))

    # 5. Achievements
    story.append(Paragraph("ACHIEVEMENTS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#333333"), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph("HackMIT 2026 Participant - SpiceRoute Kitchen", item_title_style))
    story.append(Paragraph("<b>Role:</b> Full-Stack Developer &nbsp;|&nbsp; <b>Tech Stack:</b> React, Spring Boot, MySQL, JWT, Razorpay, WebSockets", item_sub_style))
    story.append(Paragraph("• &nbsp; Built a full-stack food delivery platform with customer, restaurant, delivery partner and admin portals, secure authentication, real-time order tracking and payment integration.", bullet_style))
    story.append(Spacer(1, 6))

    # 6. Certifications
    story.append(Paragraph("CERTIFICATIONS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#333333"), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph("• &nbsp; <b>NPTEL:</b> Java, Data Structures & Algorithms, DBMS, Operating Systems and Computer Networks certifications.", bullet_style))
    story.append(Paragraph("• &nbsp; <b>AWS Cloud Practitioner, NASSCOM FutureSkills, Infosys Springboard, Coursera Machine Learning</b> and related professional certifications.", bullet_style))
    story.append(Spacer(1, 6))

    # 7. Education
    story.append(Paragraph("EDUCATION", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#333333"), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph("Sri Krishna College of Engineering & Technology, Coimbatore", item_title_style))
    story.append(Paragraph("B.E. — Computer Science & Design &nbsp;|&nbsp; 2023 – 2027 &nbsp;|&nbsp; <b>CGPA: 8.5</b>", item_sub_style))

    doc.build(story)
    print("Resume PDF successfully generated at public/resume.pdf!")

if __name__ == "__main__":
    generate_pdf()

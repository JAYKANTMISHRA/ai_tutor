const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const generationConfig2={
        temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  
   export const courseOutlineAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study  materia for phython  for exam and level of difficulty will be easy with summery of course  list of chapters along with summery for each chapter  topic  all result in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"studyMaterial\": {\n    \"courseTitle\": \"Python for Beginners - Exam Prep (Easy Level)\",\n    \"courseDescription\": \"This study material provides a comprehensive overview of fundamental Python concepts suitable for beginner-level exams. It focuses on clarity, simplicity, and practical application of key topics. The summaries are designed to reinforce understanding and aid in quick revision.\",\n    \"difficultyLevel\": \"Easy\",\n    \"chapters\": [\n      {\n        \"chapterNumber\": 1,\n        \"chapterTitle\": \"Introduction to Python and Setup\",\n        \"summary\": \"This chapter introduces Python, its history, and its applications. It covers how to install Python and set up a development environment.  We cover using the Python interpreter and writing simple programs.\",\n        \"topics\": [\n          \"What is Python?\",\n          \"History and Features of Python\",\n          \"Applications of Python\",\n          \"Installing Python (Windows, macOS, Linux)\",\n          \"Python Interpreter\",\n          \"Running Your First Python Program\",\n          \"Basic Text Editors/IDEs for Python (e.g., IDLE)\"\n        ]\n      },\n      {\n        \"chapterNumber\": 2,\n        \"chapterTitle\": \"Basic Data Types and Variables\",\n        \"summary\": \"This chapter explains Python's fundamental data types: integers, floats, strings, and booleans. It also covers variables and how to assign values to them. Basic arithmetic operations are introduced.\",\n        \"topics\": [\n          \"Integers (int)\",\n          \"Floating-Point Numbers (float)\",\n          \"Strings (str)\",\n          \"Booleans (bool)\",\n          \"Variables: Naming Conventions and Assignment\",\n          \"Arithmetic Operators (+, -, *, /, %, **)\",\n          \"Data Type Conversion (int(), float(), str())\"\n        ]\n      },\n      {\n        \"chapterNumber\": 3,\n        \"chapterTitle\": \"Input and Output\",\n        \"summary\": \"This chapter deals with how to get input from the user using the `input()` function and how to display output to the console using the `print()` function. Formatting output is also covered.\",\n        \"topics\": [\n          \"The `print()` function\",\n          \"The `input()` function\",\n          \"String Formatting (f-strings, `.format()`)\",\n          \"Basic Console Interaction\"\n        ]\n      },\n      {\n        \"chapterNumber\": 4,\n        \"chapterTitle\": \"Control Flow: Conditional Statements\",\n        \"summary\": \"This chapter introduces conditional statements (`if`, `elif`, `else`) which allow programs to execute different blocks of code based on certain conditions. Comparison operators are also explained.\",\n        \"topics\": [\n          \"Comparison Operators (==, !=, >, <, >=, <=)\",\n          \"Logical Operators (and, or, not)\",\n          \"The `if` statement\",\n          \"The `elif` statement\",\n          \"The `else` statement\",\n          \"Nested `if` statements\"\n        ]\n      },\n      {\n        \"chapterNumber\": 5,\n        \"chapterTitle\": \"Control Flow: Loops\",\n        \"summary\": \"This chapter covers loops (`for` and `while`) which are used to repeat a block of code multiple times. The `break` and `continue` statements are also explained.\",\n        \"topics\": [\n          \"The `for` loop (iterating through sequences)\",\n          \"The `range()` function\",\n          \"The `while` loop\",\n          \"The `break` statement\",\n          \"The `continue` statement\",\n          \"Nested Loops\"\n        ]\n      },\n      {\n        \"chapterNumber\": 6,\n        \"chapterTitle\": \"Data Structures: Lists\",\n        \"summary\": \"This chapter introduces lists, a fundamental data structure in Python.  It covers list creation, accessing elements, modifying lists, and common list methods.\",\n        \"topics\": [\n          \"Creating Lists\",\n          \"Accessing List Elements (indexing and slicing)\",\n          \"List Length (len())\",\n          \"Modifying Lists (append(), insert(), remove(), pop())\",\n          \"List Methods (count(), index(), sort(), reverse())\",\n          \"List Comprehension (basic)\"\n        ]\n      },\n      {\n        \"chapterNumber\": 7,\n        \"chapterTitle\": \"Data Structures: Strings\",\n        \"summary\": \"This chapter explores string manipulation techniques including string indexing, slicing, and built-in string methods. Understanding strings is crucial for text processing.\",\n        \"topics\": [\n          \"String Indexing and Slicing\",\n          \"String Immutability\",\n          \"String Methods (lower(), upper(), strip(), split(), join(), find(), replace())\",\n          \"String Formatting (revisited)\"\n        ]\n      },\n      {\n        \"chapterNumber\": 8,\n        \"chapterTitle\": \"Functions\",\n        \"summary\": \"This chapter explains how to define and use functions. Functions are reusable blocks of code that perform specific tasks. It covers function arguments, return values, and scope.\",\n        \"topics\": [\n          \"Defining Functions (def keyword)\",\n          \"Function Arguments (positional, keyword, default)\",\n          \"Return Values\",\n          \"Function Scope (local and global)\",\n          \"Calling Functions\"\n        ]\n      }\n    ],\n    \"examTips\": [\n      \"Practice writing code regularly to reinforce your understanding.\",\n      \"Understand the difference between different data types and how to use them.\",\n      \"Be familiar with control flow statements (`if`, `for`, `while`).\",\n      \"Know how to define and call functions.\",\n      \"Understand basic list operations.\",\n      \"Read the questions carefully and pay attention to details.\",\n      \"Try to solve practice problems and past exam papers.\"\n    ]\n  }\n}\n```"},
          ],
        },
      ],
    });
  
  
   export const generateNotesAiModel = model.startChat({
  generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `generate exam material details content for each chapter. Make sure to include all topic points in the content. Make sure to give content in html format (do not include html, head, body, or title tags). The chapter:: {
    "courseTitle": "DBMS Fundamentals - Exam Prep (Easy Level)",
    "courseDescription": "This study material provides a basic overview of Database Management Systems (DBMS) concepts, designed for introductory level exams. The focus is on understanding fundamental principles and terminology.",
    "difficultyLevel": "Easy",
    "chapters": [
      {
        "chapterNumber": 1,
        "chapterTitle": "Introduction to Database Systems",
        "summary": "This chapter introduces the fundamental concepts of databases, database management systems (DBMS), and their advantages over traditional file systems. It covers the basic components of a database system and the different types of database users.",
        "topics": [
          "What is a Database?",
          "What is a Database Management System (DBMS)?",
          "Advantages of using a DBMS",
          "Components of a Database System (Hardware, Software, Data, Users)",
          "Types of Database Users (DBA, Application Programmers, End Users)",
          "Data vs. Information"
        ]
      }
    ]
  }`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `<div>
    <h2>Chapter 1: Introduction to Database Systems</h2>
    <p>This chapter introduces the fundamental concepts of databases, database management systems (DBMS), and their advantages over traditional file systems. It covers the basic components of a database system and the different types of database users.</p>
    <hr>

    <h3>1. What is a Database?</h3>
    <p>A <strong>database</strong> is an organized, structured collection of related data stored electronically. It is designed to be easily accessed, managed, and updated. Think of it as a sophisticated electronic filing cabinet.</p>
    <ul>
        <li><strong>Organized Collection:</strong> Data is not stored randomly. It is organized in a specific structure, most commonly in tables (which consist of rows and columns).</li>
        <li><strong>Related Data:</strong> The data within a database typically relates to a specific subject or purpose. For example, a university database would contain related data about students, courses, and professors.</li>
        <li><strong>Example:</strong> A simple phone book is a type of database. It stores names, addresses, and phone numbers in an organized, alphabetical order. A university's student database is a more complex example, storing student IDs, names, courses enrolled, and grades.</li>
    </ul>

    <h3>2. What is a Database Management System (DBMS)?</h3>
    <p>A <strong>Database Management System (DBMS)</strong> is the software that allows users to create, manage, and interact with a database. It acts as an intermediary or a "manager" between the user and the actual database.</p>
    <p>Instead of accessing the data files directly, users and applications interact with the DBMS, which then handles all operations.</p>
    <ul>
        <li><strong>Key Functions:</strong> Defining the database structure, inserting, updating, deleting, and retrieving data.</li>
        <li><strong>Popular DBMS Examples:</strong> MySQL, Oracle Database, Microsoft SQL Server, PostgreSQL, and MongoDB.</li>
    </ul>

    <h3>3. Advantages of using a DBMS</h3>
    <p>A DBMS offers significant advantages over traditional file-based systems (like storing data in separate text files or spreadsheets).</p>
    <ul>
        <li><strong>Controlling Data Redundancy:</strong> It minimizes the duplication of data. For instance, a student's address is stored only once, even if they are enrolled in multiple courses.</li>
        <li><strong>Ensuring Data Consistency:</strong> By reducing redundancy, the risk of inconsistency is also reduced. If an address is updated, the change is immediately available to all applications and users.</li>
        <li><strong>Improved Data Sharing:</strong> A DBMS allows multiple users and applications to access and share the same data concurrently (at the same time).</li>
        <li><strong>Enhanced Data Security:</strong> It provides mechanisms to protect data from unauthorized access. A DBA can grant different access permissions to different users.</li>
        <li><strong>Enforcing Data Integrity:</strong> The DBMS can enforce rules (constraints) to ensure that the data is accurate and valid. For example, it can ensure that a student's Grade Point Average (GPA) is always between 0.0 and 4.0.</li>
        <li><strong>Backup and Recovery:</strong> It provides tools to back up the data regularly and restore it in case of a system crash or failure.</li>
    </ul>

    <h3>4. Components of a Database System</h3>
    <p>A complete database system is made up of four main components that work together.</p>
    <ul>
        <li><strong>Hardware:</strong> The physical electronic devices. This includes the computers (servers) where the database is stored, storage devices (like hard drives), and network devices that allow access to the database.</li>
        <li><strong>Software:</strong> The programs that control and manage the overall system. This includes the <strong>DBMS software</strong> itself, the <strong>Operating System</strong> (like Windows or Linux), and any <strong>application programs</strong> that access the database.</li>
        <li><strong>Data:</strong> The most crucial component. It is the collection of raw facts and figures stored in the database. The data is the bridge between the machine components (hardware, software) and the human component (users).</li>
        <li><strong>Users:</strong> The individuals who access and interact with the database. These users have different roles and needs, as explained in the next topic.</li>
    </ul>

    <h3>5. Types of Database Users</h3>
    <p>Database users can be categorized based on how they interact with the system.</p>
    <ul>
        <li>
            <strong>Database Administrator (DBA):</strong> The person who has central control over the entire system.
            <ul>
                <li><strong>Responsibilities:</strong> Manages security, monitors performance, performs backups and recovery, and grants access rights to other users. The DBA is the technical expert.</li>
            </ul>
        </li>
        <li>
            <strong>Application Programmers:</strong> Professionals who write application programs (e.g., a website, a mobile app) that interact with the database.
            <ul>
                <li><strong>Interaction:</strong> They don't work directly with the database but embed database commands (like SQL) into their application code.</li>
            </ul>
        </li>
        <li>
            <strong>End Users:</strong> The people who use the applications created by programmers to perform their daily tasks. They are the primary reason the database exists.
            <ul>
                <li><strong>Naive Users:</strong> They interact with the system through user-friendly graphical interfaces (GUIs) and have no technical knowledge of the database. Example: A bank clerk using the banking software to open an account.</li>
                <li><strong>Sophisticated Users:</strong> They are familiar with the database structure and use a query language (like SQL) to access the data they need, often for analysis or reports. Example: A business analyst who directly queries the sales database to find trends.</li>
            </ul>
        </li>
    </ul>

    <h3>6. Data vs. Information</h3>
    <p>It's important to understand the distinction between "data" and "information."</p>
    <ul>
        <li><strong>Data:</strong> Raw, unorganized, and unprocessed facts. By itself, data has little meaning.
            <ul>
                <li><strong>Example:</strong> "120", "Alice", "Marketing", "75000"</li>
            </ul>
        </li>
        <li><strong>Information:</strong> Data that has been processed, organized, and structured in a meaningful context. Information is useful for decision-making.
            <ul>
                <li><strong>Example:</strong> "The employee named <strong>Alice</strong>, with ID <strong>120</strong>, works in the <strong>Marketing</strong> department and has a salary of <strong>$75,000</strong>."</li>
            </ul>
        </li>
    </ul>
    <p>In short, the DBMS helps turn raw <strong>data</strong> into useful <strong>information</strong>.</p>
</div>`,
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ],
});


export const generatequizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `generate quiz on topic :flutter fundamentals, user interface (ui) development, basic app navigation with question ans options along with correct answer in json format`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
  "quiz": {
    "title": "Flutter Fundamentals Quiz",
    "questions": [
      {
        "id": 1,
        "topic": "Flutter Fundamentals",
        "question": "What programming language is primarily used for Flutter development?",
        "options": [
          "Kotlin",
          "Swift",
          "JavaScript",
          "Dart"
        ],
        "answer": "Dart"
      },
      {
        "id": 2,
        "topic": "UI Development",
        "question": "In Flutter's UI, the core principle is that everything is a ________.",
        "options": [
          "Component",
          "Widget",
          "View",
          "Element"
        ],
        "answer": "Widget"
      },
      {
        "id": 3,
        "topic": "Basic App Navigation",
        "question": "Which widget provides a standard app layout with an AppBar, body, and FloatingActionButton?",
        "options": [
          "Container",
          "MaterialApp",
          "Scaffold",
          "Column"
        ],
        "answer": "Scaffold"
      },
      {
        "id": 4,
        "topic": "UI Development",
        "question": "Which widget would you use to arrange other widgets in a vertical line?",
        "options": [
          "Row",
          "List",
          "Stack",
          "Column"
        ],
        "answer": "Column"
      },
      {
        "id": 5,
        "topic": "Flutter Fundamentals",
        "question": "What is the primary difference between a StatelessWidget and a StatefulWidget?",
        "options": [
          "StatelessWidget cannot have child widgets.",
          "StatefulWidget can change its internal state and redraw itself during the app's lifetime.",
          "StatelessWidgets are more performant for all use cases.",
          "StatefulWidgets must be at the root of the app."
        ],
        "answer": "StatefulWidget can change its internal state and redraw itself during the app's lifetime."
      },
      {
        "id": 6,
        "topic": "Basic App Navigation",
        "question": "How do you programmatically navigate to a new screen (Route) in Flutter?",
        "options": [
          "Navigator.go(context, newScreen)",
          "Router.push(context, newScreen)",
          "Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))",
          "Screen.load(NewScreen())"
        ],
        "answer": "Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))"
      },
      {
        "id": 7,
        "topic": "UI Development",
        "question": "To add empty space around a widget, you should wrap it with the ________ widget.",
        "options": [
          "Spacer",
          "Padding",
          "SizedBox",
          "Container"
        ],
        "answer": "Padding"
      },
      {
        "id": 8,
        "topic": "Flutter Fundamentals",
        "question": "What is the name of the file where you declare your app's dependencies, such as third-party packages and fonts?",
        "options": [
          "build.gradle",
          "package.json",
          "config.yaml",
          "pubspec.yaml"
        ],
        "answer": "pubspec.yaml"
      },
      {
        "id": 9,
        "topic": "Basic App Navigation",
        "question": "How do you return to the previous screen from the current screen?",
        "options": [
          "Navigator.pop(context)",
          "Navigator.back(context)",
          "Navigator.remove(context)",
          "System.exit(0)"
        ],
        "answer": "Navigator.pop(context)"
      },
      {
        "id": 10,
        "topic": "UI Development",
        "question": "Which widget allows you to place multiple widgets on top of each other in a layered fashion?",
        "options": [
          "Column",
          "Overlay",
          "Stack",
          "Row"
        ],
        "answer": "Stack"
      }
    ]
  }
}`,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ] });
  

export const generateflashcardAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `generate the flashcard on topic : flutter fundamentals ,user interface (ui)development,basic app navigation in json format with front back content  ,maximum 15`,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ] });











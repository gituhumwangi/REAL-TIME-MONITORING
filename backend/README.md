##PROJECT TITLE
 VivaMetrics - Make your donations count.

##PROJECT DESCRIPTION.
VivaMetrics is an application designed to empower donors and charities by providing robust tools for tracking donations. 
The app promotes transparency and accountability, helping donors, charities, and beneficiaries stay connected and informed.

##TABLE OF CONTENTS

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contributing](#contributing)
5. [Lisense](#lisense)

##Installation 

1: Clone the repository using the following command:
    git clone https://github.com/gituhumwangi/REAL-TIME-MONITORING.git

2: Install the required packages by running the following command:
    pip install -r requirements.txt 
    pipenv install in the directory
    pipenv shell 

3: Create a new database by running the following command:
    python manage.py makemigrations
    python manage.py migrate

4: Run the application by running the following command:
    python manage.py runserver

5: Open the application in your browser by going to the following URL:  http://127.0.0.1:8000/

##Usage 

1: Register as a user by clicking on the Register button and filling in the required information.
2: As a donor, create a project by clicking Create Project and filling in the necessary details.
3: Define Key Performance Indicators (KPIs) for your project via the Create KPI button.
4: Track project progress using the View Project button, which displays detailed KPIs.
5: View project summaries and descriptions from the homepage.

##Features 
1: Project Management: Donors can create and manage donation projects.
2: KPI Tracking: Define and monitor Key Performance Indicators for each project.
3: User Registration: Support for donors, implementing agencies, and beneficiaries.
4: Donation Tracking: Donors can track their contributions and project progress.
5: Agency Collaboration: Donors can appoint implementing agencies to manage projects.
6: Beneficiary Onboarding: Implementing agencies can enroll new beneficiaries into projects.

##Contributing
Contributions are welcomed and appreciated. Please follow the standard guidelines for contributing to open source projects.

1: Fork this project: 
   git clone  https://github.com/gituhumwangi/REAL-TIME-MONITORING.git

2: Create a new branch:
    git checkout -b feature-name

3: Make changes and stage them:
    git add .

4: Commit the changes:
   git commit -m "commit message"

5: Push the changes to the remote repository:
   git push origin feature-name

6: Create a pull request:
    git request pull

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as you include the original copyright and license notice. 

See the [LICENSE](LICENSE) file for details.



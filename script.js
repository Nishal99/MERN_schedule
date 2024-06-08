const schedule = [
    { day: 'June 10', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 11', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 12', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 13', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 14', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 15', tasks: [
        { time: '09:00 - 11:00', task: 'JavaScript Fundamentals' },
        { time: '11:15 - 13:15', task: 'MongoDB Basics' },
        { time: '14:00 - 16:00', task: 'Express.js Basics' },
        { time: '16:15 - 18:15', task: 'Express.js Continued' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 16', tasks: [
        { time: '09:00 - 21:00', task: 'Lectures' },
    ]},
    { day: 'June 17', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 18', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 19', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 20', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 21', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 22', tasks: [
        { time: '09:00 - 11:00', task: 'React.js Basics (components, state, props)' },
        { time: '11:15 - 13:15', task: 'React.js Continued (hooks: useState, useEffect, React Router)' },
        { time: '14:00 - 16:00', task: 'React.js Continued (Context API/Redux if time permits)' },
        { time: '16:15 - 18:15', task: 'Node.js Basics (asynchronous programming, file system)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 23', tasks: [
        { time: '09:00 - 21:00', task: 'Lectures' },
    ]},
    { day: 'June 24', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 25', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 26', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 27', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 28', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 29', tasks: [
        { time: '09:00 - 11:00', task: 'Full-Stack Project Setup (backend setup with Express.js, MongoDB)' },
        { time: '11:15 - 13:15', task: 'Full-Stack Project Development (building APIs, connecting to MongoDB)' },
        { time: '14:00 - 16:00', task: 'Full-Stack Project (frontend with React.js, integrating frontend and backend)' },
        { time: '16:15 - 18:15', task: 'Project Deployment (using Heroku, Netlify)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
    { day: 'June 30', tasks: [
        { time: '09:00 - 21:00', task: 'Lectures' },
    ]},
    { day: 'July 01', tasks: [
        { time: '09:00 - 11:00', task: 'inal Project Review and Polishing' },
        { time: '11:15 - 13:15', task: 'Update Resume and Portfolio (GitHub, LinkedIn)' },
        { time: '14:00 - 16:00', task: 'Job Applications (apply for junior developer positions)' },
        { time: '16:15 - 18:15', task: 'Practice Interview Questions (technical and HR)' },
        { time: '19:00 - 21:00', task: 'English Practice' },
    ]},
];

function createSchedule() {
    const scheduleContainer = document.getElementById('schedule');

    schedule.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `<h2>${day.day}</h2>`;

        day.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('schedule-item');

            const taskInfo = document.createElement('div');
            taskInfo.innerHTML = `<strong>${task.time}</strong> - ${task.task}`;
            taskDiv.appendChild(taskInfo);

            const toggleButton = document.createElement('button');
            toggleButton.innerText = 'Complete';
            toggleButton.addEventListener('click', () => {
                taskDiv.classList.toggle('completed');
                toggleButton.classList.toggle('completed');
                toggleButton.innerText = taskDiv.classList.contains('completed') ? 'Completed' : 'Complete';
            });

            taskDiv.appendChild(toggleButton);
            dayDiv.appendChild(taskDiv);
        });

        scheduleContainer.appendChild(dayDiv);
    });
}

document.addEventListener('DOMContentLoaded', createSchedule);

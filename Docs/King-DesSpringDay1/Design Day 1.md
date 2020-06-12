# Task Management System

## Scenarios:
- Johnathan is a software developer for the new banking company, BankCorp. He has just completed his training and will be joining the dev floor with nine other new hires. They are evenly split between 10 new hires and 10 developers so that each new hire has a mentor for their first month. 
As part of this, each new hire is required to join the ‘new hires’ group on the Task Management System where every new hire is able to view the current work, progress, and quality of each of his or her peers’ work. This system is in place so that it ushers a friendly rivalry in the company where each employee can show off the work they have completed and view the work of others so that in the long term it will increase the quality of work.
Johnathan suggests to the manager that each developer should be able to upload screenshots of their frontend work and even comments so that they can commend their coworkers with a job well done.
The manager gets back to Johnathan and wants to go forward with this idea because he believes it will boost the morale of the workplace (as long as the comments are positive). The manager, as an administrator, wants the ability to delete inappropriate comments or pictures should they ever arise.
 
- Jennifer is the leader of her software firm in Sweden in which she has to juggle the progress of eight programmers all at once. She believes that there is a software solution available to help her keep track of her employees because it is hard for her to remember what they are all working on.
She is looking for a software where the user can create groups because she has employees specifically for security, frontend, and backend development. She also wants a software in which they can create tasks and indicate the progress towards completing that task. Finally, she wants the software to be flexible enough where she can add employees and groups as her company grows.
Jennifer selects the Task Management System which recognizes her role as the manager and allows her to perform operations of adding/deleting/editing groups, users, and group boards. She then begins adding groups for Frontend, Backend, and Security. After that she creates user profiles for all of her employees, and assigns them to their respective groups. Finally, she gets a board set up for her entire workplace and they are ready to begin documenting the tasks as they begin them. 
 
- Gregory is a manager of a technology repair business, and he is looking for a solution to help him with his trouble meeting deadlines pertaining to shipments, product orders, and inventory counts. He has a small group of about five employees, but he has a little bit of trouble keeping them all on task at the same time.
To help Gregory with this problem, one of his colleagues suggests that he finds a system that will allow him to assign tasks to specific employees and provide a deadline that the task must be completed. Gregory agrees with this idea because he believes that it will help him hold his employees accountable for the actions that they complete and it will help him when deciding who to give a promotion to. 
Gregory is happy to find a software solution because it allows both for the assignment of tasks by the manager, and also the employees can assign the tasks to themselves. Gregory thinks this will help keep his employees motivated to complete the work on their own without waiting for his guidance. Gregory also likes that this system allows for him to rank the quality of work completed by each of his employees so that at the end of each period he can assess each employee’s performance. 
Gregory’s only complaints for the system is that he wishes that tasks could be filtered by date due because he has so many tasks that he has trouble finding which one is the most time appropriate and that he wants two separate columns for complete and incomplete stories so he does not have to worry about those that are complete anymore.  

## User Stories: 
- As a project manager, I want to be able to add new employees and groups to the system in order to accomodate my growing company.
- As a project manager, I want to be able to add a task board to a specific group so that my employees will only see the tasks relevant to their position. 
- As both a manager and an employee, I want to be able to add new tasks to the group board so that we can complete tasks as they arise.
- As a group member, I want to be able to indicate my progress towards completing the task so that my manager can quickly glance and see how much I have progressed. 
- As a store owner, I want to be able to assign tasks to specific employees so that they know what they should be doing at all times.
- As a store clerk, I want to be able to take ownership of tasks before my boss assigns them to me so that I am not waiting on tasks to be assigned.
- As a project manager, I want to set strict deadlines for tasks to be completed so that my employees know how to prioritize their actions.
- As a project manager, I want to be able to edit the details of a task in the case that details of a task change once the task has been assigned. 
- As a group member, I want to be able to leave comments on tasks so that I can document my progress and encourage my team members. 
- As a group member, I want to be able to upload screenshots to my task so that I can further show the work that I have completed.
- As a manager, I want the capability of deleting inappropriate or detrimental comments on the system to be sure that employees behave appropriately.
- As a software developer, I want to rank the work of my peers on a five star rating system so that they have an instant feedback of what I think about the work that they have completed. 
- As a store manager, I want the average of all of the rankings to be displayed on my employee’s profile so that I can assess his or her performance at the end of the period. 
- As a project manager, I want there to be separate columns for incomplete and complete tasks so that I can only focus on the tasks at hand.

## Feature List:

### Admin Employee/Group/Board Setup
#### Description
- As a project manager, I want to be able to add new employees and groups to the system in order to accomodate my growing company.
- As a project manager, I want to be able to add a task board to a specific group so that my employees will only see the tasks relevant to their position. 
#### Constraints
This feature should only be able to be done by an admin/manager role. All users created must have a username/password combination of 5-20 characters, and all groups should contain at least one user. Each group should also be assigned at least one task board as well.
#### Comments
Based on Jennifer’s story.


### Task Creation and Assignment
#### Description
- As both a manager and an employee, I want to be able to add new tasks to the group board so that we can complete tasks as they arise.
- As a store owner, I want to be able to assign tasks to specific employees so that they know what they should be doing at all times.
- As a store clerk, I want to be able to take ownership of tasks before my boss assigns them to me so that I am not waiting on tasks to be assigned.
- As a project manager, I want to set strict deadlines for tasks to be completed so that my employees know how to prioritize their actions.
#### Constraints
Tasks created are required to have a title, description, and a deadline for the task to be completed. The deadline cannot be set for a date in the past.
#### Comments
Based on Gregory’s story.

### Task Editing/Progress Indication
#### Description
- As a group member, I want to be able to indicate my progress towards completing the task so that my manager can quickly glance and see how much I have progressed.
- As a project manager, I want there to be separate columns for incomplete and complete tasks so that I can only focus on the tasks at hand.
- As a project manager, I want to be able to edit the details of a task in the case that details of a task change once the task has been assigned.
#### Constraints
Progress indicators should be based on categories: “not started”, “in progress”, “awaiting review”, and “complete”. Tasks indicated with “complete” should be moved to a separate column so that they are no longer in the pool with incomplete tasks. Users should be able to move freely back and forth between progress indicators regardless of their current progress.
#### Comments
Based on Gregory’s story.

### Comments & Pictures
#### Description
- As a group member, I want to be able to leave comments on tasks so that I can document my progress and encourage my team members. 
- As a group member, I want to be able to upload screenshots to my task so that I can further show the work that I have completed.
- As a manager, I want the capability of deleting inappropriate or detrimental comments on the system to be sure that employees behave appropriately.
#### Constraints
Managers should be the only ones able to delete comments and pictures. 
#### Comments
Based on Johnathan’s story.

### Ranking System
#### Description
- As a software developer, I want to rank the work of my peers on a five star rating system so that they have an instant feedback of what I think about the work that they have completed. 
- As a store manager, I want the average of all of the rankings to be displayed on my employee’s profile so that I can assess his or her performance at the end of the period. 
#### Constraints
Ranking should be on a 5 star system with 1 star being the worst and 5 stars being the best. Each user should be able to only submit one ranking per task. Each task that is assigned to a specific user should have its rank averaged and displayed on the user’s profile. If there is no ranking for the task then it should be ignored for the final calculation, and if there are multiple rankings for one task then the average for that specific task should be added with the averages of all other of the user’s tasks and then averaged for the final result.
#### Comments
Based on Johnathan and Gregory’s story.

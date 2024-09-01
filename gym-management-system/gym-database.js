// Create Gymnasium
const gym1 = new Gymnasium(1, 'Downtown Gym', '123 Main St', '123-456-7890');

// Create Members
const member1 = new Member(1, 'Doe', 'John', '456 Elm St', '1990-01-01', 'Male', gym1.gymID);
const member2 = new Member(2, 'Smith', 'Jane', '789 Oak St', '1992-02-02', 'Female', gym1.gymID);

// Add Members to Gymnasium
gym1.addMember(member1);
gym1.addMember(member2);

// Create Sessions
const session1 = new Session(1, 'Yoga', 'Monday 10 AM', 20, gym1.gymID);
const session2 = new Session(2, 'Pilates', 'Wednesday 2 PM', 20, gym1.gymID);

// Add Sessions to Gymnasium
gym1.addSession(session1);
gym1.addSession(session2);

// Create Coaches
const coach1 = new Coach(1, 'Brown', 'Mike', 35, 'Yoga', session1.sessionID);
const coach2 = new Coach(2, 'Taylor', 'Sarah', 30, 'Pilates', session2.sessionID);

// Add Coaches to Sessions
session1.addCoach(coach1);
session2.addCoach(coach2);

// Register Members for Sessions
session1.registerMember(member1); // John Doe registers for Yoga
session2.registerMember(member2); // Jane Smith registers for Pilates

console.log(gym1);
console.log(member1);
console.log(session1);

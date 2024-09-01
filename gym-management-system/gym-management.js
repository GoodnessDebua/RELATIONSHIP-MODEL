// Gymnasium Class
class Gymnasium {
    constructor(id, name, address, phoneNumber) {
      this.gymID = id;
      this.name = name;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.members = []; // List of members
      this.sessions = []; // List of sessions
    }
  
    addMember(member) {
      this.members.push(member);
    }
  
    addSession(session) {
      this.sessions.push(session);
    }
  }
  
  // Member Class
  class Member {
    constructor(id, lastName, firstName, address, dateOfBirth, gender, gymID) {
      this.memberID = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
      this.gymID = gymID; // Reference to the gymnasium
      this.sessions = []; // List of sessions the member has registered for
    }
  
    registerForSession(session) {
      this.sessions.push(session);
    }
  }
  
  // Session Class
  class Session {
    constructor(id, sportType, schedule, maxMembers, gymID) {
      this.sessionID = id;
      this.sportType = sportType;
      this.schedule = schedule;
      this.maxMembers = maxMembers || 20;
      this.gymID = gymID; // Reference to the gymnasium
      this.coaches = []; // List of coaches
      this.registeredMembers = []; // List of members registered for the session
    }
  
    addCoach(coach) {
      if (this.coaches.length < 2) {
        this.coaches.push(coach);
      } else {
        console.log('A session can only have up to two coaches.');
      }
    }
  
    registerMember(member) {
      if (this.registeredMembers.length < this.maxMembers) {
        this.registeredMembers.push(member);
        member.registerForSession(this); // Also add the session to the member's list
      } else {
        console.log('This session is full.');
      }
    }
  }
  
  // Coach Class
  class Coach {
    constructor(id, lastName, firstName, age, specialty, sessionID) {
      this.coachID = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.age = age;
      this.specialty = specialty;
      this.sessionID = sessionID; // Reference to the session
    }
  }
  
  // Registration Class (for Many-to-Many relationship between Members and Sessions)
  class Registration {
    constructor(id, memberID, sessionID) {
      this.registrationID = id;
      this.memberID = memberID;
      this.sessionID = sessionID;
    }
  }
  
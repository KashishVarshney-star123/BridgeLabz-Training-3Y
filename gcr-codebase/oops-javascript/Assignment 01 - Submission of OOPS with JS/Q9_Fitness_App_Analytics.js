
class FitnessAnalytics {
    constructor(workoutData) {
        if (workoutData.length === 0) {
            throw new Error("Workout data is empty!");
        }

        this.workoutData = workoutData;
    }

    // 1. Get Active Users
    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    // 2. Get Average Calories
    getAverageCalories() {
        let total = this.workoutData.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.workoutData.length;
    }

    // 3. Get User Summary
    getUserSummary() {
        return this.workoutData.map(user => {
            return user.user + " burned " + user.calories + " calories.";
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    console.log(fitness.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}

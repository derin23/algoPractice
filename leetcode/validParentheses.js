/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

var isValid = function(s) {
    const stack = [];
    const matches = {
      '(':')',
      '[':']',
      '{':'}'
    }
    if(stack.length % 2 !== 0) return false;
    for(const c of s) {
      if(c in matches) {
        stack.push(c);
      } else {
          if(stack.length === 0) {
            return false;
            }
            let prevOpen = stack.pop();
            if(matches[prevOpen] != c) {
              return false;
              }
      }
    }
    return stack.length === 0;
};


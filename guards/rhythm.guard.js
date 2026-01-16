/*
Rhythm Guard

Any attempt to execute anything must fail here.
*/

export function rhythmGuard() {
  return {
    allowed: false,
    reason: "No rhythmic permission"
  };
}

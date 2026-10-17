function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const anyOpeningUnsecured = !isDoorLocked || !isWindowClosed;
  const accessGranted = isAlarmOn && !anyOpeningUnsecured && isOwnerInside;
  return accessGranted ? "Secure" : "Unsafe";
}

const scenarios = [
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: true, isOwnerInside: true },
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: false, isOwnerInside: true },
  { isDoorLocked: false, isWindowClosed: true, isAlarmOn: true, isOwnerInside: true },
  { isDoorLocked: true, isWindowClosed: false, isAlarmOn: true, isOwnerInside: true },
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: true, isOwnerInside: false },
];

scenarios.forEach((scenario, index) => {
  const { isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside } = scenario;
  const status = checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);

  console.log(
    `Test ${index + 1} | Door locked: ${isDoorLocked} | Window closed: ${isWindowClosed} | Alarm on: ${isAlarmOn} | Owner inside: ${isOwnerInside} -> ${status}`
  );
});
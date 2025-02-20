const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  } else {
    console.log('Notification permission denied.');
  }
};

export default function App() {
  return (
    <div>
      <h1>PWA Push Notifications</h1>
      <button onClick={requestNotificationPermission}>
        Enable Notifications
      </button>
    </div>
  );
}

import { notifications } from '@mantine/notifications';

export function showNotification(
  title: string,
  content: string,
  color: string
) {
  notifications.show({
    position: 'top-right',
    title: title,
    message: content,
    color: color,
    radius: 'md',
  });
}

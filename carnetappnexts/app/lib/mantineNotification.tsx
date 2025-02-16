import { notifications } from '@mantine/notifications';

export function showNotification(title: string, content: string) {
  notifications.show({
    position: 'top-right',
    title: title,
    message: content,
    color: 'cyan',
    radius: 'md',
  });
}

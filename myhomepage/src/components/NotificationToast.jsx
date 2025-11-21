import React from 'react';
import {useToast} from '../context/ToastProvider';
import {useNavigate} from "react-router-dom";

const NotificationToast = () => {
    const {notifications, removeNotification} = useToast();

    const navigate = useNavigate();
    const handleNotificationClick = (notification) => {
        if (notification.boardId) {
            navigate(`/board/${notification.boardId}`);
            removeNotification(notification.id);
        }
    }

    return (
        <div className="notification-container">
            {notifications.map((notification) => (
                <div key={notification.id} className="notification-toast">
                    <div className="notification-content">
                        <div className="notification-icon">🔔</div>
                        <div className="notification-text">
                            <h4>{notification.msg}</h4>
                            {notification.title && <p>제목: {notification.title}</p>}
                            {notification.writer && <p>작성자: {notification.writer}</p>}
                            {notification.boardId && <button className="notification-goto-btn"
                            onClick={()=>handleNotificationClick(notification)}>
                                상세보기
                            </button>}
                        </div>
                        <button className="notification-close"
                                onClick={() => removeNotification(notification.id)}
                                aria-label="close">
                            X
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NotificationToast;
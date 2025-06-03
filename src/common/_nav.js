import Icon from "../helper/icon";

export default {
    items: [
        {
            id: 'home',
            name: 'Home',
            url: '/home',
            icon: <Icon.HomeIcon />,
            isDropdown: false,
            children: [{}]
        },
        {
            id: 'todo',
            name: 'To Do',
            url: '/todo',
            icon: <Icon.ToDoIcon />,
            isDropdown: true,
            children: [{
                id: 'review',
                name: 'Review',
                url: '/review'
            }]
        },
        {
            id: 'leave',
            name: 'Leave',
            url: '/leave',
            icon: <Icon.LeaveIcon />,
            isDropdown: true,
            children: [
                {
                    id: 'leaveapply',
                    name: 'Leave Apply',
                    url: '/leaveapply'
                },
                {
                    id: 'leavebalances',
                    name: 'Leave Balances',
                    url: '/leavebalances'
                },
            ]
        },
    ]
}
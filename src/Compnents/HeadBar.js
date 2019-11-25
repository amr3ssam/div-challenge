import React from 'react';
import plus from '../Images/plus.svg'
import support from '../Images/support.svg'
import notification from '../Images/notification.svg'
import { HeadBarComponent, MainButton, MainButtonLabel, AvatarButton, AvatarButtonLabel } from '../Style'
import { ReactComponent as Search } from '../Images/search.svg'

export default class HeadBar extends React.Component {

    render() {
        return (
            <HeadBarComponent >
                <MainButton>
                    <MainButtonLabel>
                        New transaction
                    </MainButtonLabel>
                    <img src={plus} className="icon" alt='plus' />
                </MainButton>
                <Search className="search" />
                <img src={support} className="support" alt='support' />
                <img src={notification} className="support" alt='notification' />
                <AvatarButton>
                    <AvatarButtonLabel>
                        CK
                    </AvatarButtonLabel>
                </AvatarButton>
            </HeadBarComponent>
        );
    }
}

import {Navigation, Logo, NavigationBox, SocialsBox} from "../assets/styles/components/Navigation";
import Container from "../assets/styles/components/Container";

const Header = () => {

    return (
        <>   
            <Navigation>
                    <Container>
                        <NavigationBox>
                           <Logo><span>adamkeyes</span></Logo>
                           <SocialsBox>
                                <a href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3035 0C5.50583 0 0 5.50583 0 12.3035C0 17.7478 3.52188 22.3463 8.41254 23.9765C9.02771 24.0842 9.2584 23.715 9.2584 23.3921C9.2584 23.0999 9.24302 22.131 9.24302 21.1005C6.15176 21.6696 5.35203 20.347 5.10596 19.6549C4.96755 19.3012 4.36775 18.2092 3.84485 17.917C3.41423 17.6863 2.79905 17.1173 3.82947 17.1019C4.79838 17.0865 5.49045 17.9939 5.72114 18.363C6.82846 20.2239 8.59709 19.701 9.30454 19.3781C9.4122 18.5783 9.73516 18.04 10.0889 17.7325C7.35136 17.4249 4.49079 16.3637 4.49079 11.6576C4.49079 10.3196 4.96755 9.21227 5.7519 8.35102C5.62886 8.04343 5.19824 6.78232 5.87493 5.09058C5.87493 5.09058 6.90535 4.76762 9.2584 6.3517C10.2427 6.07487 11.2885 5.93645 12.3343 5.93645C13.3801 5.93645 14.4259 6.07487 15.4102 6.3517C17.7632 4.75224 18.7936 5.09058 18.7936 5.09058C19.4703 6.78232 19.0397 8.04343 18.9167 8.35102C19.701 9.21227 20.1778 10.3042 20.1778 11.6576C20.1778 16.3791 17.3018 17.4249 14.5643 17.7325C15.0103 18.1169 15.3948 18.8552 15.3948 20.0086C15.3948 21.6542 15.3794 22.9768 15.3794 23.3921C15.3794 23.715 15.6101 24.0995 16.2253 23.9765C18.6676 23.1519 20.79 21.5821 22.2936 19.4882C23.7972 17.3941 24.6063 14.8814 24.6071 12.3035C24.6071 5.50583 19.1012 0 12.3035 0Z" fill="white"/>
                                    </svg>
                                </a>

                                <a href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.084 0.230569C12.8875 0.234334 12.7002 0.315057 12.5626 0.455404C12.4249 0.59575 12.3478 0.784498 12.3479 0.981084V15.247C12.3479 15.4461 12.4269 15.637 12.5677 15.7778C12.7084 15.9185 12.8993 15.9975 13.0983 15.9975C13.2974 15.9975 13.4883 15.9185 13.6291 15.7778C13.7698 15.637 13.8488 15.4461 13.8488 15.247V0.981084C13.849 0.881401 13.829 0.782702 13.7905 0.69077C13.752 0.598826 13.6955 0.515494 13.6244 0.445622C13.5533 0.375751 13.4689 0.320754 13.3764 0.283831C13.2837 0.246908 13.1847 0.228797 13.085 0.230569H13.084ZM24.4402 4.504C24.3421 4.50683 24.2457 4.52877 24.1561 4.5686L17.7152 7.44351C17.5835 7.50305 17.4717 7.59932 17.3932 7.72081C17.3149 7.84229 17.2732 7.98382 17.2732 8.12841C17.2732 8.273 17.3149 8.41453 17.3932 8.53601C17.4717 8.6575 17.5835 8.75377 17.7152 8.81331L24.1561 11.6974C24.2529 11.741 24.3576 11.7637 24.4637 11.7641C24.6353 11.7636 24.8016 11.7042 24.9347 11.596C25.0679 11.4878 25.16 11.3372 25.1955 11.1693C25.2312 11.0015 25.2082 10.8265 25.1304 10.6735C25.0527 10.5206 24.9248 10.3989 24.7682 10.3287L19.8612 8.12943L24.7682 5.93838C24.9494 5.85681 25.0909 5.70689 25.1621 5.52136C25.2332 5.33581 25.228 5.12969 25.1477 4.94795C25.0868 4.81235 24.9871 4.69783 24.8611 4.61883C24.7352 4.53982 24.5887 4.49986 24.4402 4.504ZM1.03621 9.73538C1.14077 9.68585 1.25538 9.66117 1.37106 9.66328V9.6643C1.53457 9.66748 1.69257 9.72401 1.82101 9.82524C1.94946 9.92647 2.04132 10.0669 2.08262 10.2251C2.86815 13.2343 4.62967 15.8977 7.09121 17.7984C9.55275 19.699 12.5752 20.7294 15.6851 20.7282C15.8842 20.7282 16.0752 20.8073 16.2159 20.9481C16.3567 21.0888 16.4357 21.2798 16.4357 21.4787C16.4357 21.6778 16.3567 21.8687 16.2159 22.0095C16.0752 22.1502 15.8842 22.2292 15.6851 22.2292C8.60245 22.2292 2.4107 17.4473 0.630797 10.6014C0.601853 10.4894 0.599201 10.3722 0.623048 10.259C0.646895 10.1458 0.696595 10.0396 0.768267 9.94876C0.839939 9.85793 0.93164 9.7849 1.03621 9.73538Z" fill="white"/>
                                    </svg>
                                </a>

                                <a href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.55118 3.3042C4.41153 3.3042 3.48435 4.23017 3.48435 5.36833C3.48435 6.50724 4.41153 7.4338 5.55118 7.4338C6.6886 7.4338 7.61395 6.50724 7.61395 5.36833C7.61395 4.23017 6.6886 3.3042 5.55118 3.3042ZM3.76642 8.99818V20.4515H7.32904L7.33039 8.99818H3.76642ZM9.56453 8.99713V20.4503L13.119 20.4517L13.1204 14.7845C13.1204 13.3298 13.3738 11.8429 15.2533 11.8429C17.1042 11.8429 17.1042 13.5976 17.1042 14.879V20.4503L20.6628 20.449V14.1689C20.6628 11.3348 20.1455 8.71224 16.3928 8.71224C14.6302 8.71224 13.4768 9.70851 13.0245 10.5618H12.9745L12.9746 8.99713H9.56453ZM22.4354 24H1.98174C1.00586 24 0.211914 23.223 0.211914 22.268V1.73068C0.211914 0.776376 1.00586 0 1.98174 0H22.4354C23.415 0 24.2119 0.776376 24.2119 1.73068V22.268C24.2119 23.223 23.415 24 22.4354 24Z" fill="white"/>
                                    </svg>
                                </a>

                                <a href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                        <path d="M18.9939 2.56447C18.309 2.86796 17.5733 3.07302 16.7997 3.1657C17.5979 2.68816 18.195 1.93655 18.4796 1.05114C17.7298 1.49652 16.9091 1.81002 16.0534 1.97801C15.4778 1.36354 14.7156 0.956256 13.8849 0.819402C13.0542 0.682547 12.2016 0.823762 11.4594 1.22114C10.7172 1.61851 10.127 2.2498 9.78033 3.017C9.43366 3.7842 9.35 4.64438 9.54233 5.464C8.02298 5.38772 6.53667 4.99282 5.17983 4.30493C3.823 3.61705 2.62596 2.65155 1.66642 1.4711C1.33833 2.03707 1.14967 2.69325 1.14967 3.39209C1.14931 4.02121 1.30423 4.64069 1.6007 5.19557C1.89717 5.75045 2.32602 6.22357 2.8492 6.57296C2.24245 6.55365 1.64909 6.38971 1.11851 6.09477V6.14398C1.11844 7.02634 1.42365 7.88155 1.98236 8.56451C2.54106 9.24741 3.31884 9.71602 4.18372 9.89083C3.62087 10.0431 3.03075 10.0655 2.45795 9.95638C2.70196 10.7157 3.17729 11.3796 3.81738 11.8553C4.45747 12.3309 5.23028 12.5945 6.02761 12.609C4.67409 13.6717 3.00249 14.248 1.28173 14.2454C0.976918 14.2455 0.672362 14.2277 0.369629 14.1921C2.1163 15.3152 4.14955 15.9112 6.2261 15.9088C13.2555 15.9088 17.0984 10.0868 17.0984 5.03748C17.0984 4.87343 17.0942 4.70775 17.0868 4.5437C17.8343 4.00314 18.4795 3.33377 18.9922 2.56694L18.9939 2.56447Z" fill="white"/>
                                    </svg>
                                </a>
                           </SocialsBox>
                        </NavigationBox>                 
                    </Container>
            </Navigation>  
        </>
    );
}

export default Header;
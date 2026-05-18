import { Link, usePage } from '@inertiajs/react';
import { House } from 'lucide-react';
import { route } from 'ziggy-js';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import { Role } from '@/types/enums';

type NavMainProps = {
    portalItems: NavItem[];
    adminItems: NavItem[];
};

export function NavMain({ portalItems = [], adminItems = [] }: NavMainProps) {
    const page = usePage();
    const { auth } = page.props;

    const { isCurrentUrl } = useCurrentUrl();

    const renderItems = (items: NavItem[]) =>
        items.map((item) => (
            <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                    asChild
                    isActive={isCurrentUrl(item.href)}
                    tooltip={{ children: item.title }}
                >
                    <Link href={item.href} prefetch>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        ));

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        tooltip={{ children: 'Zur Startseite' }}
                    >
                        <Link href={route('home')} prefetch>
                            <House />
                            <span>Zur Startseite</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarGroupLabel>Portal</SidebarGroupLabel>
            <SidebarMenu>{renderItems(portalItems)}</SidebarMenu>
            {auth.user.role === Role.Admin && (
                <>
                    <SidebarGroupLabel>Admin</SidebarGroupLabel>
                    <SidebarMenu>{renderItems(adminItems)}</SidebarMenu>
                </>
            )}
        </SidebarGroup>
    );
}

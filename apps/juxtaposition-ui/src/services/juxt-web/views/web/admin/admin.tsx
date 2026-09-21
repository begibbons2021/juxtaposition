import cx from 'classnames';
import { useUser } from '@/services/juxt-web/views/common/hooks/useUser';
import type { ReactNode } from 'react';

export type ModerationTabsProps = {
	selected: 'users' | 'reports' | 'automod' | 'communities';
};

export function WebModerationHead(props : ModerationTabsProps): ReactNode {
	var name: string;

	/* TODO: Create template strings for moderation page names and tabs? */
	switch (props.selected) {
		case 'users': name = "User Accounts"; break;
		case 'reports': name = "User Reports"; break;
		case 'automod': name = "Automod"; break;
		case 'communities': name = "Manage Communities"; break;
		default: name = "Moderation"; break;
	}

	const title = `Juxt - Admin - ${name}`;
	
	return (
		<>
			<title>{title}</title>
		</>
	);
}

export function WebAdminCenterItems(props: { children?: ReactNode }): ReactNode {
	return (
		<div className="admin-center-items">
			{props.children}
		</div>
	);
}

export function WebModerationTabs(props: ModerationTabsProps): ReactNode {
	const user = useUser();

	return (
		<div className="buttons tabs">
			<a
				id="post-reports"
				className={cx({
					selected: props.selected === 'reports'
				})}
				href="/admin/posts"
			>
				Posts
			</a>
			<a
				id="post-automod"
				className={cx({
					selected: props.selected === 'automod'
				})}
				href="/admin/automod"
			>
				Automod
			</a>
			<a
				id="account-reports"
				className={cx({
					selected: props.selected === 'users'
				})}
				href="/admin/accounts"
			>
				Accounts
			</a>
			{ user.perms.developer
				? (
						<a
							id="communities"
							className={cx({
								selected: props.selected === 'communities'
							})}
							href="/admin/communities"
						>
							Communities
						</a>
					)
				: null }
		</div>
	);
}

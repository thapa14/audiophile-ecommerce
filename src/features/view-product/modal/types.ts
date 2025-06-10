import type { RequireAtLeastOne } from 'shared/lib/utilityType';
import type { ButtonProps } from 'shared/ui';

export type T = Omit<ButtonProps, 'children'> & {
    slug?: string;
    pId?: number;
};

export type SeeProductButtonProps = RequireAtLeastOne<T, 'slug' | 'pId'>;

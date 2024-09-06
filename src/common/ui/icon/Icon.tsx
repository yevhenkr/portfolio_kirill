import iconsSprite from '../../../../src/assets/icons/sprite.svg'

type PropsType = {
  height?: string
  iconId: string
  iconId2?: string
  viewBox?: string
  weight?: string
  color?: string
}
export const Icon = (props: PropsType) => {
  return (
    <svg
      fill={'black'}
      height={props.height || '30'}
      viewBox={props.viewBox || '0 0 30 30'}
      width={props.weight || '30'}
      color={props.color || ""}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      {props.iconId2 ? <use xlinkHref={`${iconsSprite}#${props.iconId2}`} /> : ''}
    </svg>
  )
}

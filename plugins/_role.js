let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'خادم'
      : ((user.level >= 3) && (user.level <= 6)) ? 'فلاح'
      : ((user.level >= 6) && (user.level <= 9)) ? 'مواطن'
      : ((user.level >= 9) && (user.level <= 12)) ? 'شخص عادي'
      : ((user.level >= 12) && (user.level <= 15)) ? 'شخص عادي'
      : ((user.level >= 15) && (user.level <= 18)) ? 'شخص عادي'
      : ((user.level >= 18) && (user.level <= 21)) ? 'شخص عادي'
      : ((user.level >= 21) && (user.level <= 24)) ? 'شخص عادي'
      : ((user.level >= 24) && (user.level <= 27)) ? 'شخص عادي'
      : ((user.level >= 27) && (user.level <= 30)) ? 'شخص عادي'
      : ((user.level >= 30) && (user.level <= 33)) ? 'تاجر'
      : ((user.level >= 33) && (user.level <= 36)) ? 'تاجر'
      : ((user.level >= 36) && (user.level <= 39)) ? 'تاجر'
      : ((user.level >= 39) && (user.level <= 42)) ? 'تاجر'
      : ((user.level >= 42) && (user.level <= 45)) ? 'تاجر'
      : ((user.level >= 45) && (user.level <= 48)) ? 'تاجر'
      : ((user.level >= 48) && (user.level <= 51)) ? 'غني'
      : ((user.level >= 51) && (user.level <= 54)) ? 'عني فشخ'
      : ((user.level >= 54) && (user.level <= 57)) ? 'عني ني.ك'
      : ((user.level >= 57) && (user.level <= 60)) ? 'ابو حبدر'
      : ((user.level >= 60) && (user.level <= 63)) ? 'ابو عزام'
      : ((user.level >= 63) && (user.level <= 66)) ? 'الحاج إبراهيم العرجاني'
      : ((user.level >= 66) && (user.level <= 1000)) ? 'ايلون ماسك الغلابة'

      : 'Dragón rey estrella'

    user.role = role
    return true
}

export default handler

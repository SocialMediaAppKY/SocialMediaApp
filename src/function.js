export function errorResolve(code) {
  switch (code) {
    case 'auth/weak-password':
      return 'Şifre geçersiz';

    case 'auth/emaıl-already-ın-use':
      return 'Hesap mevcut';

    default:
      break;
  }
}

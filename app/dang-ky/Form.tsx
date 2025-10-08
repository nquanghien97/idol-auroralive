'use client';

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowDown, ArrowRight } from 'lucide-react'
import React, { useId, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import Select from 'react-select';
import { vi } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Modal from '@/components/ui/modal';
import { Textarea } from '@/components/ui/textarea';
import Popup from './Popup';

type POSITION_TYPE =
  | 'idol_livestream'
  | 'livestream_seller'
  | 'team_lead_seller'
  | 'team_lead_idol';

type EDUCATION_TYPE =
  | 'not_graduated'
  | 'high_school'
  | 'vocational'
  | 'college'
  | 'university'
  | 'postgraduate';

type GENDER_TYPE =
  | 'MALE'
  | 'FEMALE'
  | 'OTHER'

interface FormValues {
  position: POSITION_TYPE;
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: GENDER_TYPE;
  citizenIdentificationNumber: string;
  hometown: string;
  address: string;
  education: EDUCATION_TYPE;
  tiktokLink: string;
  facebookLink: string;
  currentJob: string;
  income12MonthsAgo: string;
  incomeGoalAfter3Months: string;
  incomeGoalAfter6Months: string;
  incomeGoalAfter12Months: string;
}

const formSchema = yup.object({
  position: yup
    .mixed<'idol_livestream' | 'livestream_seller' | 'team_lead_seller' | 'team_lead_idol'>()
    .oneOf(['idol_livestream', 'livestream_seller', 'team_lead_seller', 'team_lead_idol'])
    .required('Vui lòng chọn vị trí mong muốn'),

  fullName: yup.string().required('Họ và tên là bắt buộc'),

  phoneNumber: yup
    .string()
    .matches(/^0\d{9}$/, 'Số điện thoại phải có 10 chữ số và bắt đầu bằng 0')
    .required('Số điện thoại là bắt buộc'),

  dateOfBirth: yup
    .date()
    .max(new Date(), 'Ngày sinh không hợp lệ')
    .required('Ngày sinh là bắt buộc'),

  gender: yup
    .mixed<'MALE' | 'FEMALE' | 'OTHER'>()
    .oneOf(['MALE', 'FEMALE', 'OTHER'], 'Giới tính không hợp lệ')
    .required('Giới tính là bắt buộc'),

  citizenIdentificationNumber: yup
    .string()
    .matches(/^0\d{11}$/, 'CCCD phải gồm 12 chữ số và bắt đầu bằng số 0')
    .required('Vui lòng nhập số CCCD'),

  hometown: yup.string().required('Vui lòng nhập quê quán'),

  address: yup.string().required('Vui lòng nhập địa chỉ thường trú'),

  education: yup
    .mixed<
      | 'not_graduated'
      | 'high_school'
      | 'vocational'
      | 'college'
      | 'university'
      | 'postgraduate'
    >()
    .oneOf(['not_graduated', 'high_school', 'vocational', 'college', 'university', 'postgraduate'])
    .required('Vui lòng chọn trình độ học vấn'),

  tiktokLink: yup
    .string()
    .url('Link TikTok không hợp lệ')
    .required(),

  facebookLink: yup
    .string()
    .url('Link Facebook/Instagram không hợp lệ')
    .required(),

  currentJob: yup.string().required('Vui lòng nhập nghề nghiệp hiện tại'),

  income12MonthsAgo: yup.string().required('Vui lòng nhập thu nhập 12 tháng trước'),

  incomeGoalAfter3Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 3 tháng'),

  incomeGoalAfter6Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 6 tháng'),

  incomeGoalAfter12Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 12 tháng'),
});

function Form() {

  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formSchema)
  })

  const [isShowInformation, setIsShowInformation] = useState(false);
  const [isShowPersonalAttributes, setIsShowPersonalAttributes] = useState(false);

  // điểm mạnh
  const [strengthsValue, setStrengthsValue] = useState('Điểm mạnh')
  const strengthsRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalStrengths, setIsOpenModalStrengths] = useState(false)

  // điểm yếu
  const [weaknessesValue, setWeaknessesValue] = useState('Điểm yếu')
  const weaknessesRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalWeaknesses, setIsOpenModalWeaknesses] = useState(false)

  // sở thích/năng khiếu
  const [hobbyValue, setHobbyValue] = useState('Sở thích/Năng khiếu')
  const hobbyRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalHobby, setIsOpenModalHobby] = useState(false)

  // ước mơ
  const [dreamValue, setDreamValue] = useState('Ước mơ')
  const dreamRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalDream, setIsOpenModalDream] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const id = useId()

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const submitData = {
        ...data,
        gender: data.gender === 'FEMALE' ? 'Nữ' : data.gender === 'MALE' ? 'Nam' : 'Khác',
        strengths: strengthsValue,
        weaknesses: weaknessesValue,
        hobby: hobbyValue,
        dream: dreamValue
      }
      await fetch('/api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card className="p-8 border-border bg-card">
        <h3 className="text-4xl font-bold mb-6 text-center">Đăng ký hồ sơ</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
            <div className="w-[160px]">
              <p>Vị trí</p>
            </div>
            <div className="w-full">
              <Controller
                name="position"
                control={control}
                render={({ field }) => {
                  type OptionType = { label: string; value: POSITION_TYPE };
                  const options: OptionType[] = [
                    { label: 'Idol Livestream', value: 'idol_livestream' },
                    { label: 'Livestream Seller', value: 'livestream_seller' },
                    { label: 'Team Lead Seller', value: 'team_lead_seller' },
                    { label: 'Team Lead Idol', value: 'team_lead_idol' }
                  ];
                  return (
                    <div className="space-y-1 h-12">
                      <Select<OptionType, false>
                        {...field}
                        instanceId={id}
                        options={options}
                        getOptionLabel={option => option.label}
                        getOptionValue={option => option.value}
                        className="h-full"
                        placeholder="Chọn vị trí"
                        onChange={option => field.onChange(option?.value)}
                        value={options.find(option => option.value === field.value)}
                      />
                      {errors.position && (
                        <p className="text-sm text-red-500">{errors.position.message}</p>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <div>
            <div className="cursor-pointer flex gap-1 text-[#1877f2]" onClick={() => setIsShowInformation(pre => !pre)}>
              <p className="text-[#1877f2]">Thông tin cơ bản</p>
              {isShowInformation ? <ArrowRight className="rotate-90 duration-300" color='currentColor' /> : <ArrowRight className="duration-300" color='currentColor' />}
            </div>
          </div>

          {isShowInformation && (
            <div className="space-y-4">
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Họ tên</p>
                </div>
                <Controller
                  control={control}
                  name="fullName"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Họ và tên"
                      className="h-12"
                    />
                  )}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Số điện thoại</p>
                </div>
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Số điện thoại"
                      className="h-12"
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Ngày sinh</p>
                </div>
                <div className="border border-[#e1ddde] rounded-lg w-full">
                  <Controller
                    name="dateOfBirth"
                    control={control}
                    defaultValue={new Date()}
                    render={({ field }) => (
                      <DatePicker
                        locale={vi}
                        className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date: Date | null) => field.onChange(date)}
                        dateFormat="dd/MM/yyyy"
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    )}
                  />
                  {errors.dateOfBirth && <span className="text-[red] text-xs p-2">{errors.dateOfBirth.message}</span>}
                </div>
              </div>
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Giới tính</p>
                </div>
                <div className="w-full">
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => {
                      type OptionType = { label: string; value: GENDER_TYPE };
                      const options: OptionType[] = [
                        { label: 'Nam', value: 'MALE' },
                        { label: 'Nữ', value: 'FEMALE' },
                        { label: 'Khác', value: 'OTHER' },
                      ];
                      return (
                        <div className="space-y-1 h-12">
                          <Select<OptionType, false>
                            {...field}
                            instanceId={id}
                            options={options}
                            getOptionLabel={option => option.label}
                            getOptionValue={option => option.value}
                            className="h-full"
                            placeholder="Chọn giới tính"
                            onChange={option => field.onChange(option?.value)}
                            value={options.find(option => option.value === field.value)}
                          />
                          {errors.gender && (
                            <p className="text-sm text-red-500">{errors.gender.message}</p>
                          )}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Số CCCD</p>
                </div>
                <Controller
                  control={control}
                  name="citizenIdentificationNumber"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Số CCCD"
                      className="h-12"
                    />
                  )}
                />
                {errors.citizenIdentificationNumber && (
                  <p className="text-sm text-red-500">{errors.citizenIdentificationNumber.message}</p>
                )}
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Quê quán</p>
                </div>
                <Controller
                  control={control}
                  name="hometown"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Quê quán"
                      className="h-12"
                    />
                  )}
                />
                {errors.hometown && (
                  <p className="text-sm text-red-500">{errors.hometown.message}</p>
                )}
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Nơi ở hiện tại</p>
                </div>
                <Controller
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Nơi ở hiện tại"
                      className="h-12"
                    />
                  )}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">{errors.address.message}</p>
                )}
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Học vấn</p>
                </div>
                <Controller
                  name="education"
                  control={control}
                  render={({ field }) => {
                    type OptionType = { label: string; value: EDUCATION_TYPE };
                    const options: OptionType[] = [
                      { label: 'Chưa tốt nghiệp', value: 'not_graduated' },
                      { label: 'Phổ thông', value: 'high_school' },
                      { label: 'Trung cấp', value: 'vocational' },
                      { label: 'Cao đẳng', value: 'college' },
                      { label: 'Đại học', value: 'university' },
                      { label: 'Trên Đại học', value: 'postgraduate' },
                    ];
                    return (
                      <div className="space-y-1 h-12 w-full">
                        <Select<OptionType, false>
                          {...field}
                          instanceId={id}
                          options={options}
                          getOptionLabel={option => option.label}
                          getOptionValue={option => option.value}
                          className="h-full"
                          placeholder="Học vấn"
                          onChange={option => field.onChange(option?.value)}
                          value={options.find(option => option.value === field.value)}
                        />
                        {errors.education && (
                          <p className="text-sm text-red-500">{errors.education.message}</p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Link tiktok</p>
                </div>
                <Controller
                  control={control}
                  name="tiktokLink"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Link Tiktok"
                      className="h-12"
                    />
                  )}
                />
                {errors.tiktokLink && (
                  <p className="text-sm text-red-500">{errors.tiktokLink.message}</p>
                )}
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Link Facebook</p>
                </div>
                <Controller
                  control={control}
                  name="facebookLink"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Link Facebook"
                      className="h-12"
                    />
                  )}
                />
                {errors.facebookLink && (
                  <p className="text-sm text-red-500">{errors.facebookLink.message}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <div className="cursor-pointer flex gap-1 text-[#1877f2]" onClick={() => setIsShowPersonalAttributes(pre => !pre)}>
              <p className="text-[#1877f2]">Năng lực, sở thích</p>
              {isShowPersonalAttributes ? <ArrowRight className="rotate-90 duration-300" color='currentColor' /> : <ArrowRight className="duration-300" color='currentColor' />}
            </div>
          </div>

          {isShowPersonalAttributes && (
            <div className="space-y-4">
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Điểm mạnh</p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalStrengths(true)} className="cursor-pointer">
                    <AlertDescription>{strengthsValue}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Điểm yếu</p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalWeaknesses(true)} className="cursor-pointer">
                    <AlertDescription>{weaknessesValue}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Sở thích/Năng khiếu</p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalHobby(true)} className="cursor-pointer">
                    <AlertDescription>{hobbyValue}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Ước mơ</p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalDream(true)} className="cursor-pointer">
                    <AlertDescription>{dreamValue}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Nghề nghiệp</p>
                </div>
                <Controller
                  control={control}
                  name="currentJob"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Nghề nghiệp"
                      className="h-12"
                    />
                  )}
                />
                {errors.currentJob && (
                  <p className="text-sm text-red-500">{errors.currentJob.message}</p>
                )}
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                <div className="w-[160px]">
                  <p>Thu nhập 12 tháng gần nhất</p>
                </div>
                <Controller
                  control={control}
                  name="income12MonthsAgo"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Thu nhập 12 tháng gần nhất"
                      className="h-12"
                    />
                  )}
                />
                {errors.income12MonthsAgo && (
                  <p className="text-sm text-red-500">{errors.income12MonthsAgo.message}</p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex gap-1 text-[#1877f2]">
                  <p className="text-[#1877f2]">Mục tiêu thu nhập</p>
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                  <div className="w-[160px]">
                    <p>Sau 3 tháng</p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter3Months"
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Sau 3 tháng"
                        className="h-12"
                      />
                    )}
                  />
                  {errors.incomeGoalAfter3Months && (
                    <p className="text-sm text-red-500">{errors.incomeGoalAfter3Months.message}</p>
                  )}
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                  <div className="w-[160px]">
                    <p>Sau 6 tháng</p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter6Months"
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Sau 6 tháng"
                        className="h-12"
                      />
                    )}
                  />
                  {errors.incomeGoalAfter6Months && (
                    <p className="text-sm text-red-500">{errors.incomeGoalAfter6Months.message}</p>
                  )}
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                  <div className="w-[160px]">
                    <p>Thu nhập 12 tháng gần nhất</p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter12Months"
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Sau 1 năm"
                        className="h-12"
                      />
                    )}
                  />
                  {errors.incomeGoalAfter6Months && (
                    <p className="text-sm text-red-500">{errors.incomeGoalAfter6Months.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 cursor-pointer" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                <span>Đang gửi...</span>
              </>
            ) : (
              <>
                Gửi đăng ký
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Card>

      {/* Modal strengths */}
      <Popup
        open={isOpenModalStrengths}
        onClose={() => setIsOpenModalStrengths(false)}
        refValue={strengthsRef}
        setValue={setStrengthsValue}
        title="Điểm mạnh của bạn"
      />

      <Popup
        open={isOpenModalWeaknesses}
        onClose={() => setIsOpenModalWeaknesses(false)}
        refValue={weaknessesRef}
        setValue={setWeaknessesValue}
        title="Điểm yếu của bạn"
      />

      <Popup
        open={isOpenModalHobby}
        onClose={() => setIsOpenModalHobby(false)}
        refValue={hobbyRef}
        setValue={setHobbyValue}
        title="Sở thích/Năng khiếu của bạn"
      />

      <Popup
        open={isOpenModalDream}
        onClose={() => setIsOpenModalDream(false)}
        refValue={dreamRef}
        setValue={setDreamValue}
        title="Ước mơ của bạn"
      />
    </>
  )
}

export default Form